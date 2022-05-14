import { LitElement, html } from "lit-element";
import { routerMixin } from "lit-element-router";
import "@material/mwc-tab-bar";
import "./app-link.js";
import "./app-main.js";

class MainView extends routerMixin(LitElement) {
  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
  }

  static get properties() {
    return {
      ...super.properties,
      route: { type: String },
      params: { type: Object },
      query: { type: Object }
    };
  }

  static get routes() {
    return [
      { name: "home", pattern: "" },
      { name: "map", pattern: "map" },
      { name: "charts", pattern: "charts" },
      { name: "about", pattern: "about" },
      { name: "not-found", pattern: "*" }
    ];
  }

  router(route, params, query, _) {
    this.route = route;
    this.params = params;
    this.query = query;
  }

  render() {
    return html`
      <nav>
        <mwc-tab-bar>
          <app-link href="/">Home</app-link>
          <app-link href="/map">Map</app-link>
          <app-link href="/charts">Charts</app-link>
          <app-link href="/about">About</app-link>
        </<mwc-tab-bar>
      </nav>
      <app-main active-route=${this.route}>
        <div route="home"><h1>Home</h1></div>
        <div route="map"><h1>Map</h1></div>
        <div route="charts"><h1>Charts</h1></div>
        <div route="about"><h1>About</h1></div>
        <div route="not-found"><h1>404 Not found!!</h1></div>
      </app-main>
    `;
  }
}

customElements.define("main-view", MainView);
