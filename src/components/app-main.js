import { LitElement, html } from "lit-element";
import { outletMixin } from "lit-element-router";

export class AppMain extends outletMixin(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define("app-main", AppMain);
