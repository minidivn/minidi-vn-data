import { LitElement, html, css } from "lit";
import { getStats, filterByType } from "../data-loader.js";
import { translate } from "../utils/i18n.js";

export class MiniHero extends LitElement {
  static styles = css`
    :host {
      position: relative; text-align: center;
      padding: 40px 20px 28px;
      min-height: 200px;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
    }

    .gradient-text {
      background: linear-gradient(135deg, var(--a1), var(--a2), var(--a3));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h1 { font-size: 2rem; font-weight: 800; margin-bottom: 8px; }
    p { color: var(--text2); font-size: 0.9rem; }

    .stats {
      display: flex; gap: 24px; flex-wrap: wrap;
      justify-content: center; margin-top: 14px;
    }

    .stat { text-align: center; }

    .stat .num {
      font-size: 1.4rem; font-weight: 700;
      background: linear-gradient(135deg, var(--a1), var(--a2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .stat .label { color: var(--text3); font-size: 0.75rem; }
  `;

  static properties = { data: {} };

  render() {
    if (!this.data) return "";
    const stats = getStats(this.data.nodes);
    return html`
      <h1>
        <span class="gradient-text">
          &#x1F1FB;&#x1F1F3; Vietnam Knowledge Graph
        </span>
      </h1>
      <p>Exploring ${this.data.meta.entity_count} WikiData entities</p>
      <div class="stats">
        <div class="stat">
          <div class="num">${this.data.meta.entity_count.toLocaleString()}</div>
          <div class="label">${translate("entities")}</div>
        </div>
        <div class="stat">
          <div class="num">${(stats.event || 0).toLocaleString()}</div>
          <div class="label">${translate("events")}</div>
        </div>
        <div class="stat">
          <div class="num">${(stats.person || 0).toLocaleString()}</div>
          <div class="label">${translate("people")}</div>
        </div>
        <div class="stat">
          <div class="num">${(stats.place || 0).toLocaleString()}</div>
          <div class="label">${translate("places")}</div>
        </div>
      </div>
    `;
  }
}

customElements.define("mini-hero", MiniHero);
