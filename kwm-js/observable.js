'use strict';

class Observable {
    #current = null;
    #subscribers = new Set();

    constructor(initialValue) {
        this.#current = initialValue;
    }

    get() {
        return this.#current;
    }

    set(newValue) {
        this.#current = newValue;

        for (const listenerFunction of [...this.#subscribers]) {
            listenerFunction(newValue);
        }
    }

    subscribe(listenerFunction) {
        this.#subscribers.add(listenerFunction);
    }
}

/**
 * Creates a new observable value.
 * @template T
 * @param {T} initialValue - The initial value
 * @returns {{ value: T, subscribe: (fn: () => void) => () => boolean }}
 * @example
 * const count = observable(0);
 * count.get(); // 0
 * count.set(1); // triggers subscribers
 */
export const observable = (initialValue) => new Observable(initialValue);
