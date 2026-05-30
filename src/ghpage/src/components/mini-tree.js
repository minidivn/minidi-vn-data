import { LitElement, html, css } from "lit";
import { translate } from "../utils/i18n.js";

export class MiniTree extends LitElement {
  static styles = css`
    :host { display: block; padding: 8px 0; }
    .placeholder { color: var(--text3); text-align: center; padding: 40px; }
  `;

  render() {
    return html`<div class="placeholder">${translate("tree")} - coming soon</div>`;
  }
}

customElements.define("mini-tree", MiniTree);
