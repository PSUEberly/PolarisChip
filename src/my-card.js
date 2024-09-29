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
    this.title = 'My card';
    this.link = '#';
    this.image = null;
    this.artist = 'text';
    this.description = 'text';
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }

      div {
        padding: 8px;
        width: 300px;
        border-radius: 4px;
        text-align: center;
        background-color: grey;
        border: 2px solid black;
      }

      h1 {
        font-size:24px;
      }

      img {
        margin: auto;
        display: flex;
        height: 200px;
        width: 200px;
      }

      button {
        margin: 50px;
        position: relative;
        background-color: green;
      }

      a:focus,
      a:hover {
        color: yellow;
      }

      a {
        text-decoration: none;
        color: white;
      }
      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }
  
      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`<div>
      <h1>${this.title}</h1>
      <hr>
      <p>${this.artist}</p>
      <img src=${this.image}>
      <hr>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>About</summary>
        
          ${this.description}
        
      </details>
      <button><a href=${this.link}>Details</a></button>
      </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: Image},
      link: {type: String},
      artist: {type: String},
      description: {type: String},
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);