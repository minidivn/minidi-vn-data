import { LitElement, html, css } from "lit";
import { translate } from "../utils/i18n.js";

export class MiniFooter extends LitElement {
  static styles = css`
    :host {
      display: block; text-align: center; padding: 24px;
      color: var(--text3); font-size: 0.76rem;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
      margin-top: 32px;
    }
    a { color: var(--a1); text-decoration: none; }
    .badge {
      display: inline-block; padding: 4px 12px;
      background: var(--bg3); border-radius: var(--sm); margin: 2px;
    }
  `;

  static properties = { data: {} };

  render() {
    if (!this.data) return "";
    return html`
      <div>
        <span class="badge">
          &#x1F4E6; ${translate("entities")}: <strong>${this.data.meta.entity_count.toLocaleString()}</strong>
        </span>
        <span class="badge">&#x1F310; ${translate("source")}: WikiData</span>
      </div>
      <div style="margin-top:8px">
        &#x1F1FB;&#x1F1F3; ${translate("builtWith")}
        <a href="https://github.com/minidivn/minidi-spider">minidi-spider</a>
        &middot; <a href="https://github.com/minidivn/minidi-vn-data">GitHub</a>
      </div>
    `;
  }
}

customElements.define("mini-footer", MiniFooter);
