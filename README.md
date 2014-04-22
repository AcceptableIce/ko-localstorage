ko-localstorage.js
===============

**ko-localstorage.js** is a [knockout.js][1] binding extension that automatically retrieves that value of an observable from HTML5 LocalStorage when bindings are applied, and saves the binding's value to LocalStorage whenever its value changes.

Created by Jake Roussel ([@AcceptableIce][2])

**Usage**
Extend the observable with an object that contains a `localStorage` element.

```javascript
var userBackgroundColor = ko.observable().extend({ localStorage: 'userBackgroundStore' });
```
The value of userBackgroundColor in that example will be retreived and stored to the LocalStorage key `userBackgroundStore`.


Even though LocalStorage stores everything as a string, ko-localstorage.js automatically handles boolean and number values.



  [1]: http://www.knockoutjs.com
  [2]: http://twitter.com/acceptableice
