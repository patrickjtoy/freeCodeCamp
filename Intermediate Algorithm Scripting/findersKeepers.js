/**
 * Create a function that looks through an array (first argument) and returns
 * the first element in the array that passes a truth test (second argument).
 */

(function(log) {
  "use strict";

  function find(arr, func) {
    return arr
      .filter(value => func(value))
      .shift();
  }

  log( find([1, 2, 3, 4], num => num % 2 === 0) );
})(console.log);
