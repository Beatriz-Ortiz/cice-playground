import { LitElement, customElement, property, html, css } from 'lit-element'

@customElement('todo-list')
export class ToDoList extends LitElement {
  @property({ type: Array })
  todos: { text: string }[] = []

  static get styles() {
    return [css``]
  }

  render() {
    return html`
      <ul>
        ${this.todos.map(todo => html`<app-todo>${todo.text}</app-todo>`)}
      </ul>
    `
  }
}
