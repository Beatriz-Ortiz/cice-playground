import { LitElement, customElement, html, css } from 'lit-element'
import { general } from './general'

@customElement('todo-create')
export class ToDoCreate extends LitElement {
  static get styles() {
    return [general, css``]
  }

  private onClick() {
    new CustomEvent('on-todo-created', {
      bubbles: true,
    })
  }

  render() {
    return html`<header>
      <todo-input></todo-input>
      <todo-button @click="${this.onClick}">Create new ToDo</todo-button>
    </header>`
  }
}
