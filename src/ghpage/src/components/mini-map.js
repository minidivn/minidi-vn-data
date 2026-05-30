import { LitElement, html, css } from "lit";
import { translate } from "../utils/i18n.js";

export class MiniMap extends LitElement {
  static styles = css`
    :host { display: block; padding: 8px 0; }
    #map { width: 100%; height: 450px; border-radius: var(--md); }
    .legend {
      display: flex; gap: 12px; justify-content: center;
      flex-wrap: wrap; font-size: 0.75rem;
      color: var(--text2); margin: 6px 0;
    }
    .dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
  `;

  static properties = { data: {} };
  _map = null;

  firstUpdated() {
    this._initMap();
  }

  _initMap() {
    if (!this.data || typeof L === "undefined") return;

    const el = this.shadowRoot.getElementById("map");
    if (!el || this._map) return;

    this._map = L.map(el).setView([16, 107.5], 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18
    }).addTo(this._map);

    const coords = this.data.nodes.filter(
      n => n.m && (n.m.coordinates || n.m.coord)
    );

    coords.forEach(n => {
      const raw = n.m.coordinates || n.m.coord;
      if (!raw) return;
      const match = raw.match(
        /(-?\d+\.?\d*)\s*[,\s]\s*(-?\d+\.?\d*)/
      );
      if (!match) return;
      const lat = parseFloat(match[1]);
      const lng = parseFloat(match[2]);
      if (isNaN(lat) || isNaN(lng)) return;

      const marker = L.circleMarker([lat, lng], {
        radius: 6, color: "#6366f1", fillOpacity: 0.5
      });
      marker.bindPopup("<b>" + n.l + "</b>" + (n.lv ? "<br>" + n.lv : ""));
      marker.addTo(this._map);
    });
  }

  render() {
    return html`
      <div class="legend">
        <span><span class="dot" style="background:var(--ok)"></span> ${translate("mapPlaces")}</span>
        <span><span class="dot" style="background:var(--a1)"></span> ${translate("mapPeople")}</span>
        <span><span class="dot" style="background:var(--warn)"></span> ${translate("mapEvents")}</span>
      </div>
      <div id="map"></div>
    `;
  }
}

customElements.define("mini-map", MiniMap);
