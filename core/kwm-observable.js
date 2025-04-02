'use strict';

/**
 * KWM_Observable
 *
 * An object holding a value that can be observed for changes.
 * When the value changes, all subscribers are notified.
 *
 * @example
 * const name = new KWM_Observable("Jeremy");
 * name.subscribe((newVal) => console.log(`Name changed to ${newVal}`));
 * name.value = "Doreen";
 * // logs "Name changed to Doreen" to the console
 *
 * @param value - Give me the initial value for your Observable
 *
 * @author You - 2025
 */
