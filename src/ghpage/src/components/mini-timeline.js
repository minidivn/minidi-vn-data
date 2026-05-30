import { LitElement, html, css } from "lit";
import { translate } from "../utils/i18n.js";

export class MiniTimeline extends LitElement {
  static styles = css`
    :host { display: block; padding: 8px 0; }
    .placeholder { color: var(--text3); text-align: center; padding: 40px; }
  `;

  render() {
    return html`<div class="placeholder">${translate("timeline")} - coming soon</div>`;
  }
}

customElements.define("mini-timeline", MiniTimeline);
