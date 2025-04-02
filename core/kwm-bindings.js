'use strict';

/**
 * KWM_Bindings
 *
 * Enables declarative 2-way data-binding of attributes of HtmlElements to Observables
 *
 * @param objObservables - Give me an object containing Observables with their keys corresponding to your data-bind properties
 * @param container - Give me the container where to apply the bindings

 * @example 'new KWM_Bindings({lastName: new Observable('Osterberger')}' in template <input kwm-bind-value="lastName" />
 * binds the HtmlElement Attribute 'value' to the observable
 *
 * @author You - 2025
 */
