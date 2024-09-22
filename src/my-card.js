import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.tit = '';
    this.img = '#';
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      div{
        font-size: 24px;
        padding: 16px;
        margin: 8px;
        text-decoration: none;
      }
      :host([green]) {
        color: green;
        font-family: Arial, sans-serif;
        font-weight: bold;
      }
      :host([img]) a{
        width:200px;
        height:200px;
}
    `;
  }

  render() {
    return html`<div>${this.tit}</div>`;
  }

  static get properties() {
    return {
      tit: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
