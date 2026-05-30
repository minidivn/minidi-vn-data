import { LitElement, html, css } from "lit";
import { loadData } from "./data-loader.js";
import { buildBM25 } from "./utils/bm25.js";

// Import all components
import "./components/mini-header.js";
import "./components/mini-hero.js";
import "./components/mini-search.js";
import "./components/mini-map.js";
import "./components/mini-timeline.js";
import "./components/mini-tree.js";
import "./components/mini-footer.js";
import "./components/mini-chat.js";
import "./components/mini-detail.js";

class MiniApp extends LitElement {
  static styles = css`
    :host {
      --bg: #070b17;
      --bg2: #0f172a;
      --bg3: #1e293b;
      --a1: #6366f1;
      --a2: #06b6d4;
      --a3: #a78bfa;
      --text: #f1f5f9;
      --text2: #94a3b8;
      --text3: #64748b;
      --ok: #22c55e;
      --warn: #eab308;
      --sm: 6px;
      --md: 10px;
      --lg: 16px;
      display: block;
      min-height: 100vh;
      font-family: "Inter", sans-serif;
    }

    .splash {
      position: fixed; inset: 0; z-index: 999;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      background: var(--bg);
      transition: opacity 0.8s, transform 0.8s;
    }

    .splash.hidden {
      opacity: 0; transform: scale(1.05);
      pointer-events: none;
    }

    .spinner {
      width: 80px; height: 80px;
      border-radius: 50%;
      border: 3px solid var(--bg3);
      border-top-color: var(--a1);
      border-right-color: var(--a2);
      animation: spin 1s linear infinite;
      margin-bottom: 24px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .logo {
      font-size: 2.5rem; font-weight: 800;
      background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
    }

    .status { color: var(--text3); font-size: 0.9rem; margin-bottom: 20px; }

    .track {
      width: 240px; height: 4px;
      background: var(--bg3); border-radius: 2px; overflow: hidden;
    }

    .bar {
      height: 100%; width: 0%;
      background: linear-gradient(90deg, var(--a1), var(--a2));
      border-radius: 2px; transition: width 0.3s;
    }

    .pct { color: var(--text3); font-size: 0.75rem; margin-top: 8px; }
  `;

  static properties = {
    data: { state: true },
    loaded: { state: true },
    progress: { state: true },
    totalSize: { state: true },
    currentView: { state: true },
    entityDetail: { state: true }
  };

  constructor() {
    super();
    this.data = null;
    this.loaded = false;
    this.progress = 0;
    this.totalSize = 0;
    this.currentView = "search";
    this.entityDetail = null;
    this.bm25 = null;
    this._loadData();
  }

  async _loadData() {
    try {
      this.data = await loadData((loaded, total) => {
        this.progress = loaded;
        this.totalSize = total;
      });
      this.loaded = true;
      this.bm25 = buildBM25(this.data.nodes);
    } catch (err) {
      console.error("Failed to load data:", err);
    }
  }

  _onNavigate(view) {
    this.currentView = view;
  }

  _onShowDetail(id) {
    const node = this.data.nodes.find(n => n.id === id);
    if (node) this.entityDetail = node;
  }

  _onCloseDetail() {
    this.entityDetail = null;
  }

  render() {
    if (!this.loaded) {
      const pct = this.totalSize
        ? Math.round((this.progress / this.totalSize) * 100)
        : 0;
      return html`
        <div class="splash">
          <div class="logo">&#x1F1FB;&#x1F1F3; MiniDi</div>
          <div class="spinner"></div>
          <div class="status">Loading Vietnam knowledge graph...</div>
          <div class="track">
            <div class="bar" style="width: ${pct}%"></div>
          </div>
          <div class="pct">
            ${pct}%
            (${(this.progress / 1048576).toFixed(1)}
            / ${(this.totalSize / 1048576).toFixed(1)} MB)
          </div>
        </div>
      `;
    }

    return html`
      <mini-header
        .view=${this.currentView}
        @navigate=${this._onNavigate}
      ></mini-header>

      <mini-hero .data=${this.data}></mini-hero>

      <div class="main-content">
        ${this._renderView()}
      </div>

      <mini-footer .data=${this.data}></mini-footer>
      <mini-chat .data=${this.data}></mini-chat>

      ${this.entityDetail ? html`
        <mini-detail
          .node=${this.entityDetail}
          .edges=${this.data.edges}
          @close=${this._onCloseDetail}
        ></mini-detail>
      ` : ""}
    `;
  }

  _renderView() {
    switch (this.currentView) {
      case "map":
        return html`<mini-map .data=${this.data}></mini-map>`;
      case "timeline":
        return html`<mini-timeline .data=${this.data}></mini-timeline>`;
      case "tree":
        return html`<mini-tree .data=${this.data}></mini-tree>`;
      default:
        return html`
          <mini-search
            .data=${this.data}
            .bm25=${this.bm25}
            @show-detail=${this._onShowDetail}
          ></mini-search>
        `;
    }
  }
}

customElements.define("mini-app", MiniApp);
