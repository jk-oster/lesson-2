import {Component, html} from "../kwm-js";

class TodoComponent extends Component {
    newTodoText = '';
    todos = [];

    setText(e) {
        // TODO
    }

    addTodo() {
        // TODO
    }

    removeTodo(index) {
        // TODO
    }

    render() {
        return html`
        <section id="todo_app">
            <h2>Todo App</h2>
            <div>
                <button>
                  Add Todo
                </button>
                <input />
            </div>
            <ul>
                ${this.todos.map((todo, i) => html`
                  <li>${todo} <button>X</button></li>
                `)}
            </ul>
        </section>`;
    }
}

customElements.define('todo-component', TodoComponent);
