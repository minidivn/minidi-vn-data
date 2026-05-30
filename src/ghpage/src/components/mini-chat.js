import { LitElement, html, css } from "lit";
import { translate } from "../utils/i18n.js";

export class MiniChat extends LitElement {
  static styles = css`
    :host { position: fixed; bottom: 20px; right: 20px; z-index: 90; }

    .toggle-btn {
      width: 48px; height: 48px; border-radius: 50%; border: none;
      background: linear-gradient(135deg, var(--a1), var(--a2));
      color: #fff; font-size: 1.3rem; cursor: pointer;
      box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
      transition: 0.3s;
    }

    .toggle-btn:hover { transform: scale(1.1); }

    .panel {
      width: 340px; max-height: 460px;
      background: var(--bg2);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--lg); overflow: hidden;
      display: none; flex-direction: column;
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
    }

    .panel.open { display: flex; }

    .header {
      padding: 12px 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.07);
      display: flex; justify-content: space-between;
    }

    .header span { font-weight: 600; font-size: 0.85rem; }
    .header button { background: none; border: none; color: var(--text3); cursor: pointer; font-size: 1.1rem; }

    .messages {
      flex: 1; overflow-y: auto; padding: 12px 16px;
      min-height: 200px; max-height: 300px;
    }

    .msg {
      font-size: 0.8rem; line-height: 1.5; margin-bottom: 8px;
      padding: 8px 12px; border-radius: var(--md); max-width: 85%;
    }

    .msg.bot { background: var(--bg3); color: var(--text2); }
    .msg.user { background: rgba(99, 102, 241, 0.15); color: var(--text); margin-left: auto; }

    .input-area {
      display: flex; padding: 8px 12px; gap: 6px;
      border-top: 1px solid rgba(255, 255, 255, 0.07);
    }

    .input-area input {
      flex: 1; padding: 7px 10px;
      background: var(--bg3);
      border: 1px solid rgba(255, 255, 255, 0.07);
      border-radius: var(--sm); color: var(--text); font-size: 0.8rem;
      outline: none;
    }

    .input-area button {
      padding: 7px 14px; border: none; border-radius: var(--sm);
      background: var(--a1); color: #fff; cursor: pointer; font-size: 0.8rem;
    }
  `;

  static properties = { data: {} };

  constructor() {
    super();
    this._open = false;
    this._messages = [];
  }

  _toggle() {
    this._open = !this._open;
    if (this._open && this._messages.length === 0) {
      this._addMessage("bot", "Hello! Ask me about Vietnam history, people, or culture!");
    }
    this.requestUpdate();
  }

  _addMessage(role, text) {
    this._messages.push({ role, text });
    this.requestUpdate();
    setTimeout(() => {
      const el = this.shadowRoot.querySelector(".messages");
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  }

  _send() {
    const input = this.shadowRoot.querySelector("input");
    if (!input || !input.value.trim()) return;
    const text = input.value;
    input.value = "";
    this._addMessage("user", text);
    this._respond(text);
  }

  _respond(query) {
    const lower = query.toLowerCase();
    let response = "Try searching in the search bar above!";

    if (lower.includes("entity") || lower.includes("how many") || lower.includes("stat")) {
      const total = this.data ? this.data.meta.entity_count.toLocaleString() : "--";
      const edges = this.data ? this.data.meta.edge_count.toLocaleString() : "--";
      response = "The graph has " + total + " entities and " + edges + " relations.";
    } else if (lower.includes("dynasty") || lower.includes("king")) {
      response = "Try the Dynasty Tree view (tree icon) or search for specific dynasties!";
    }

    setTimeout(() => this._addMessage("bot", response), 300);
  }

  render() {
    return html`
      <div class="panel ${this._open ? "open" : ""}">
        <div class="header">
          <span>&#x1F916; MiniDi Assistant</span>
          <button @click=${this._toggle}>&times;</button>
        </div>
        <div class="messages">
          ${this._messages.map(m => html`
            <div class="msg ${m.role}">${m.text}</div>
          `)}
        </div>
        <div class="input-area">
          <input type="text" placeholder="${translate("chatPlaceholder")}"
            @keydown=${e => { if (e.key === "Enter") this._send(); }}>
          <button @click=${this._send}>&#x27A1;</button>
        </div>
      </div>
      <button class="toggle-btn" @click=${this._toggle}>&#x1F4AC;</button>
    `;
  }
}

customElements.define("mini-chat", MiniChat);
