/**
 * Drop the elements of an array (first argument), starting from the front,
 * until the predicate (second argument) returns true.
 */

function drop(arr, func) {
    if (arr.length === 0) return arr;
    else if (func(arr[0])) return arr;
    else return drop(arr.slice(1), func);
}

console.log(drop([1, 2, 3, 4]   , n => n >= 3)); // [ 3, 4 ]
console.log(drop([1, 2, 3]      , n => n  < 3)); // [1, 2, 3]
console.log(drop([1, 2, 3, 4]   , n => n  > 5)); // []
console.log(drop([1, 2, 3, 7, 4], n => n  > 5)); // [ 7, 4 ]
