import { LitElement, html, css } from "lit";
import { translate } from "../utils/i18n.js";

export class MiniHeader extends LitElement {
  static styles = css`
    :host {
      display: flex; align-items: center; gap: 12px;
      padding: 0 16px; height: 56px;
      background: rgba(7, 11, 23, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      position: sticky; top: 0; z-index: 50;
      color: var(--text);
    }

    .logo {
      display: flex; align-items: center; gap: 8px;
      font-weight: 700; font-size: 1rem; cursor: pointer;
    }

    .logo-icon {
      width: 28px; height: 28px;
      background: linear-gradient(135deg, var(--a1), var(--a2));
      border-radius: 6px;
      display: inline-flex; align-items: center;
      justify-content: center;
      font-size: 1rem;
    }

    .search-box { flex: 1; max-width: 400px; position: relative; }

    .search-box input {
      width: 100%; padding: 7px 12px 7px 32px;
      background: var(--bg3);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--md);
      color: var(--text); font-size: 0.85rem;
      outline: none;
    }

    .search-box input:focus {
      border-color: var(--a1);
      box-shadow: 0 0 16px rgba(99, 102, 241, 0.15);
    }

    .search-box input::placeholder { color: var(--text3); }

    .search-icon {
      position: absolute; left: 10px; top: 50%;
      transform: translateY(-50%);
      color: var(--text3); font-size: 0.8rem;
    }

    .nav-tabs {
      display: flex; gap: 2px;
      background: var(--bg3); border-radius: var(--sm);
      padding: 2px;
    }

    .nav-tab {
      padding: 5px 10px; border: none; border-radius: 4px;
      background: transparent; color: var(--text3);
      cursor: pointer; font-size: 0.78rem;
      transition: 0.3s;
    }

    .nav-tab:hover { color: var(--text2); }
    .nav-tab.active { background: var(--a1); color: #fff; }

    .lang-toggle {
      display: flex; background: var(--bg3);
      border-radius: var(--sm); overflow: hidden;
    }

    .lang-btn {
      padding: 4px 9px; border: none;
      background: transparent; color: var(--text3);
      cursor: pointer; font-size: 0.75rem;
    }

    .lang-btn.active { background: var(--a1); color: #fff; }

    .github-link {
      color: var(--text3); font-size: 1.2rem;
      text-decoration: none;
    }
  `;

  static properties = { view: {} };

  _navigate(v) {
    this.dispatchEvent(new CustomEvent("navigate", { detail: v }));
  }

  render() {
    return html`
      <div class="logo" @click=${() => this._navigate("search")}>
        <span class="logo-icon">&#x1F577;</span>
        <span>MiniDi</span>
      </div>

      <div class="search-box">
        <span class="search-icon">&#x1F50D;</span>
        <input type="text" placeholder=${translate("search")}>
      </div>

      <div class="nav-tabs">
        <button class="nav-tab ${this.view === "search" ? "active" : ""}"
          @click=${() => this._navigate("search")} title="Search">
          &#x1F50D;
        </button>
        <button class="nav-tab ${this.view === "map" ? "active" : ""}"
          @click=${() => this._navigate("map")} title="Map">
          &#x1F5FA;
        </button>
        <button class="nav-tab ${this.view === "timeline" ? "active" : ""}"
          @click=${() => this._navigate("timeline")} title="Timeline">
          &#x1F4C5;
        </button>
        <button class="nav-tab ${this.view === "tree" ? "active" : ""}"
          @click=${() => this._navigate("tree")} title="Dynasty Tree">
          &#x1F333;
        </button>
      </div>

      <div class="lang-toggle">
        <button class="lang-btn active">EN</button>
        <button class="lang-btn">VI</button>
      </div>

      <a href="https://github.com/minidivn/minidi-vn-data"
         target="_blank" class="github-link" title="GitHub">&#x1F5D2;</a>
    `;
  }
}

customElements.define("mini-header", MiniHeader);
