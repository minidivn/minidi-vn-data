import { LitElement, html, css } from "lit";
import { translate } from "../utils/i18n.js";

export class MiniDetail extends LitElement {
  static styles = css`
    :host {
      position: fixed; inset: 0; z-index: 100;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
    }

    .panel {
      background: var(--bg2);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--lg); padding: 28px;
      max-width: 600px; width: 92%;
      max-height: 85vh; overflow-y: auto;
      position: relative;
    }

    .close {
      position: absolute; top: 12px; right: 16px;
      font-size: 1.4rem; cursor: pointer;
      color: var(--text3); background: none; border: none;
    }
    .close:hover { color: var(--text); }

    .title { font-size: 1.3rem; font-weight: 700; }
    .title-vi { font-size: 0.9rem; color: var(--text3); margin-bottom: 4px; }

    .desc {
      color: var(--text2); line-height: 1.6; margin: 10px 0;
      font-size: 0.88rem;
    }

    .badge { font-size: 0.65rem; padding: 2px 10px; border-radius: 20px; font-weight: 500; }
    .badge-place { background: rgba(34, 197, 94, 0.15); color: var(--ok); }
    .badge-person { background: rgba(99, 102, 241, 0.15); color: var(--a1); }
    .badge-event { background: rgba(234, 179, 8, 0.15); color: var(--warn); }
    .badge-other { background: var(--bg3); color: var(--text3); }

    .relations { margin-top: 12px; }
    .relations h3 { font-size: 0.85rem; color: var(--a2); margin-bottom: 6px; }
    .relation-item {
      display: flex; align-items: center; gap: 4px;
      padding: 2px 0; font-size: 0.78rem;
      color: var(--text); cursor: pointer;
    }
    .relation-item:hover { color: var(--a1); }

    .wikipedia-link { margin-top: 12px; }
    .wikipedia-link a { color: var(--a1); font-size: 0.82rem; }
  `;

  static properties = { node: {}, edges: {} };

  _close() {
    this.dispatchEvent(new CustomEvent("close"));
  }

  render() {
    if (!this.node) return "";
    const n = this.node;
    const relations = this.edges
      ? this.edges.filter(e => e.s === n.id).slice(0, 20)
      : [];

    return html`
      <div class="panel">
        <button class="close" @click=${this._close}>&times;</button>

        <div class="title">${n.l}</div>
        ${n.lv ? html`<div class="title-vi">${n.lv}</div>` : ""}

        <span class="badge badge-${n.t || "other"}">${n.t || "other"}</span>

        <div class="desc">${n.d || "No description available."}</div>

        ${relations.length ? html`
          <div class="relations">
            <h3>&#x1F517; ${translate("relations")}</h3>
            ${relations.map(e => html`
              <div class="relation-item">
                <span>${e.r}</span>
                <span>&rarr;</span>
                <strong>${e.tl || e.t}</strong>
              </div>
            `)}
          </div>
        ` : ""}

        <div class="wikipedia-link">
          <a href="https://www.wikidata.org/wiki/${n.id}" target="_blank">
            &#x1F517; ${translate("wiki")} &rarr;
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("mini-detail", MiniDetail);
