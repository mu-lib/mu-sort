# mu-sort

Sort an array ([Merge Sort](http://en.wikipedia.org/wiki/Merge_sort)).

`sort(arr, order)`

0. `arr {Array}` - The source array.
0. `order {Function}` - A custom order function. Optional. If a function is specified, it is called with 2
   elements from the array and should return `0` if the are equal, a positive number if `a` is bigger and a negative
   number if `b` is bigger.

**Notes:** 

0. `arr` is modified by the sort.
0. If the `this` value of the function is defined, it will be used as the array (see examples). Thus it is
   possible to use this function to extend the Array prototype: `Array.prototype.sort2 = sort`.

## Installation

- Node:
    0. `npm install mu-sort`
    0. `var sort = require('mu-sort');`
- AMD (install with bower):
    0. `bower install mu-sort`
    0. `require(['mu-sort'], function(sort){ /* ... */ });`
    
Build AMD and CJS dists with `make build`. 
   
Run tests with `make test`.

Run coverage analysis with `make coverage` (coverage report is saved to `./coverage`).

## Examples

```Javascript
var arr = [1, 2, 1, 2, 3];
console.log(sort(arr)); // [1, 1, 2, 2, 3]
```

**With a custom order:**

```Javascript
var arr = ['world', 'hi', 'hello'];
sort(arr, function(a, b){
    // sort by the first character
    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0; 
});
console.log(arr); // ['hi', 'hello', 'world']
```

**By setting the `this` value:**

```Javascript
var arr = [1, 2, 1, 2, 3];
sort.call(arr);
console.log(sort(arr)); // [1, 1, 2, 2, 3]
```