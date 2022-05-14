import { LitElement, html } from "lit-element";
import { linkMixin } from "lit-element-router";
import "@material/mwc-tab";

export class AppLink extends linkMixin(LitElement) {
  static get properties() {
    return {
      href: { type: String }
    };
  }
  constructor() {
    super();
    this.href = "";
  }
  render() {
    return html`
      <mwc-tab @click="${this.linkClick}">
        <slot></slot>
      </mwc-tab>
    `;
  }
  linkClick(event) {
    this.navigate(this.href);
  }
}

customElements.define("app-link", AppLink);
