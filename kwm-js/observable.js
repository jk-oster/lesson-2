'use strict';



/**
 * Runs a function without tracking observable reads.
 * @template T
 * @param {() => T} fn - The function to run untracked
 * @returns {T} The function's return value
 */
export function untrack(fn) {

}

/**
 * Runs a function while tracking observable reads for dependency collection.
 * @template T
 * @param {() => T} fn - The function to run tracked
 * @returns {{ value: T, deps: Set<Observable> }} The function's return value and its dependencies
 */
function runTracked(fn) {

}

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


/**
 * Creates a side effect that runs when dependencies change.
 * @param {() => void} fn - The effect function
 * @returns {() => void} A dispose function to stop the effect
 * @example
 * effect(() => {
 *   console.log('Count is:', count.get()); // runs initially and whenever count changes
 * });
 */
export function effect(fn) {
    let unsubs = [];
    let disposed = false;
    let scheduled = false;

    function run() {
        if (disposed) return;
        scheduled = false;
        cleanup();
        const { deps } = runTracked(fn);
        unsubs = [...deps].map((dep) =>
            dep.subscribe(() => {
                if (disposed || scheduled) return;
                scheduled = true;
                queueMicrotask(run);
            }),
        );
    }

    function cleanup() {
        for (const u of unsubs) u();
        unsubs = [];
    }

    run();

    return () => {
        disposed = true;
        cleanup();
    };
}
