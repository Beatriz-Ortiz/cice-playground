import { css, customElement, html, LitElement, property } from 'lit-element'
import { general } from './general'

@customElement('todo-input')
export class Input extends LitElement {
  @property()
  label!: string

  static get styles() {
    return [general, css``]
  }

  render() {
    return html`<label>${this.label}<input /></label>`
  }
}
