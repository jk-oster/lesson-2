'use strict';

import {html} from "./html";

/**
 * KWM Component base class
 *
 *
 * Extends HTMLElement and provides basic rendering with placeholders.
 *
 * @extends HTMLElement
 *
 * @example
 * class MyComponent extends Component {
 *   render() {
 *     return html`<div>Hello World</div>`;
 *   }
 * }
 * customElements.define('my-component', MyComponent);
 */
export class Component extends HTMLElement {
    connectedCallback() {
        this.innerHTML = this.render();
    }

    render() {
        return html`<p>template: Override me I am the default</p>`
    }

    mount(container) {
        container.appendChild(this);
    }
}
