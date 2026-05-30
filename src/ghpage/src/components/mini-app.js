
import { LitElement, html, css } from "lit";
import { loadData, getStats } from "../data-loader.js";
import { buildBM25 } from "../utils/bm25.js";
import { t, setLang } from "../utils/i18n.js";

export class MiniApp extends LitElement {
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
    }

    .splash.hide {
      opacity: 0; pointer-events: none;
      transition: opacity 0.8s, transform 0.8s;
    }

    .ring {
      width: 64px; height: 64px; border-radius: 50%;
      border: 3px solid var(--bg3);
      border-top-color: var(--a1);
      border-right-color: var(--a2);
      animation: spin 1s linear infinite;
      margin-bottom: 20px;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .splash-logo {
      font-size: 2rem; font-weight: 800;
      background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 8px;
    }

    .progress-track {
      width: 200px; height: 4px;
      background: var(--bg3); border-radius: 2px; overflow: hidden;
    }

    .progress-bar {
      height: 100%; width: 0%;
      background: linear-gradient(90deg, var(--a1), var(--a2));
      transition: width 0.3s;
    }

    .pct-text {
      color: var(--text3); font-size: 0.8rem; margin-top: 8px;
    }

    .status-text {
      color: var(--text3); font-size: 0.85rem; margin-bottom: 16px;
    }

    .header {
      display: flex; align-items: center; gap: 12px;
      padding: 0 16px; height: 52px;
      background: rgba(7, 11, 23, 0.88);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      position: sticky; top: 0; z-index: 50;
    }

    .hero {
      text-align: center; padding: 32px 16px 24px;
    }

    .hero h1 {
      font-size: 1.8rem; font-weight: 800; margin-bottom: 6px;
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero p { color: var(--text2); font-size: 0.85rem; margin-bottom: 4px; }

    .stats {
      display: flex; gap: 24px; flex-wrap: wrap;
      justify-content: center; margin-top: 12px;
    }

    .stat { text-align: center; }

    .stat .num {
      font-size: 1.3rem; font-weight: 700;
      background: linear-gradient(135deg, var(--a1), var(--a2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stat .lbl { color: var(--text3); font-size: 0.72rem; }

    .results {
      max-width: 800px; margin: 0 auto; padding: 0 16px;
    }

    .card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--md);
      padding: 10px 14px; margin-bottom: 6px;
      cursor: pointer;
    }

    .card:hover {
      background: rgba(255, 255, 255, 0.06);
    }

    .card-title { font-weight: 600; color: var(--a1); font-size: 0.9rem; }
    .card-desc { color: var(--text2); font-size: 0.78rem; margin-top: 2px; }
    .badge { font-size: 0.55rem; padding: 1px 7px; border-radius: 20px; font-weight: 500; }
    .badge-place { background: rgba(34, 197, 94, 0.15); color: var(--ok); }
    .badge-person { background: rgba(99, 102, 241, 0.15); color: var(--a1); }
    .badge-event { background: rgba(234, 179, 8, 0.15); color: var(--warn); }
  `;

  static properties = {
    data: { state: true },
    loaded: { state: true },
    progress: { state: true },
    totalSize: { state: true },
    view: { state: true },
  };

  constructor() {
    super();
    this.data = null;
    this.loaded = false;
    this.progress = 0;
    this.totalSize = 0;
    this.view = "search";
    this._bm25 = null;
    this._load();
  }

  async _load() {
    try {
      this.data = await loadData((loaded, total) => {
        this.progress = loaded;
        this.totalSize = total;
      });
      this.loaded = true;
      this._bm25 = buildBM25(this.data.nodes);
    } catch (err) {
      console.error("Failed to load data:", err);
    }
  }

  renderSplash() {
    const pct = this.totalSize
      ? Math.round((this.progress / this.totalSize) * 100)
      : 0;
    return html`
      <div class="splash">
        <div class="splash-logo">&#x1F1FB;&#x1F1F3; MiniDi</div>
        <div class="ring"></div>
        <div class="status-text">Loading Vietnam knowledge graph...</div>
        <div class="progress-track">
          <div class="progress-bar" style="width: ${pct}%"></div>
        </div>
        <div class="pct-text">
          ${pct}% (${(this.progress / 1048576).toFixed(1)}
          / ${(this.totalSize / 1048576).toFixed(1)} MB)
        </div>
      </div>
    `;
  }

  render() {
    if (!this.loaded) return this.renderSplash();

    const stats = getStats(this.data.nodes);

    return html`
      <div class="header">
        <span>&#x1F577; MiniDi</span>
        <span style="color: var(--text3); font-size: 0.8rem;">
          ${this.data.meta.entity_count.toLocaleString()} entities
        </span>
      </div>

      <div class="hero">
        <h1><span class="gradient-text">&#x1F1FB;&#x1F1F3; ${t("title")}</span></h1>
        <p>Exploring WikiData entities: history, geography, people & culture</p>
        <div class="stats">
          <div class="stat">
            <div class="num">${this.data.meta.entity_count.toLocaleString()}</div>
            <div class="lbl">${t("entities")}</div>
          </div>
          <div class="stat">
            <div class="num">${(stats.event || 0).toLocaleString()}</div>
            <div class="lbl">${t("events")}</div>
          </div>
          <div class="stat">
            <div class="num">${(stats.person || 0).toLocaleString()}</div>
            <div class="lbl">${t("people")}</div>
          </div>
          <div class="stat">
            <div class="num">${(stats.place || 0).toLocaleString()}</div>
            <div class="lbl">${t("places")}</div>
          </div>
        </div>
      </div>

      <div class="results">
        <div style="text-align: center; color: var(--text3); font-size: 0.85rem; padding: 20px;">
          ${this.data.nodes.slice(0, 20).map(n => html`
            <div class="card">
              <div class="card-title">
                <span>${n.l}</span>
                ${n.lv ? html`<span style="color: var(--text3); font-size: 0.78rem;"> ${n.lv}</span>` : ""}
                <span class="badge badge-${n.t || "other"}">${n.t || "other"}</span>
              </div>
              <div class="card-desc">${n.d || ""}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define("mini-app", MiniApp);
