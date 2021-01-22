import { LitElement, customElement, html, css } from 'lit-element'
import { general } from './general'

@customElement('app-todo')
export class ToDo extends LitElement {
  static get styles() {
    return [general, css``]
  }

  render() {
    return html`<li><slot></slot></li>`
  }
}
