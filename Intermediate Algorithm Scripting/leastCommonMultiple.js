function isLeastCommonMultiple(values, index) {
    if (index === 0) return false;
    return values.every(value => index % value === 0);
}

function leastCommonMultipleOfRange(range, index, step) {
    if (isLeastCommonMultiple(range, index)) return index;
    else return leastCommonMultipleOfRange(range, index + step, step);
}

function maxOf(values) {
    return Math.max.apply(null, values);
}

function minOf(values) {
    return Math.min.apply(null, values);
}

function sumOfRange(range) {
    return range.reduce((prev, current) => prev + current);
}

function rangeFrom(values) {
    return Array.apply(0, Array(maxOf(values)))
        .map((value, index) => index + minOf(values));
}

var range = rangeFrom([1, 13]);
console.log(leastCommonMultipleOfRange(range, 0, sumOfRange(range)));
