import {Component, html, observable} from "../kwm-js";

class TodoComponent extends Component {
    todos = observable([
        { id: 1, text: "Learn KWM-JS", done: true },
        { id: 2, text: "Build something cool", done: false },
        { id: 3, text: "Ship it", done: false },
    ]);
    input = observable("");

    addTodo() {
        // TODO
    }

    removeTodo(index) {
        // TODO
    }

    render() {

        return html`
            <div class="todo-app">
                <h2 class="todo-app__title">Todo List</h2>
                <div class="todo-input">
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                    />
                    <button class="todo-add-btn">Add</button>
                </div>
                
                <ul class="todo-list">
                    <li class="todo-item">
                        <input
                            class="todo-checkbox"
                            type="checkbox"
                        />
                        <span class="todo-text">The Text</span>
                        <button class="todo-remove-btn" title="Remove">×</button>
                    </li>
                </ul>
                <div class="todo-footer">
                    <span class="todo-count">0 remaining</span>
                    <button class="todo-clear-btn">Clear done
                    </button>
                </div>
            </div>
        `;
    }
}

customElements.define('todo-component', TodoComponent);
