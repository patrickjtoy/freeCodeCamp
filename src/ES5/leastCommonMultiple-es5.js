(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function isLeastCommonMultiple(values, index) {
    if (index === 0) return false;
    return values.every(function (value) {
        return index % value === 0;
    });
}

function leastCommonMultipleOfRange(_x, _x2, _x3) {
    var _again = true;

    _function: while (_again) {
        var range = _x,
            index = _x2,
            step = _x3;
        _again = false;

        if (isLeastCommonMultiple(range, index)) return index;else {
            _x = range;
            _x2 = index + step;
            _x3 = step;
            _again = true;
            continue _function;
        }
    }
}

function maxOf(values) {
    return Math.max.apply(null, values);
}

function minOf(values) {
    return Math.min.apply(null, values);
}

function sumOfRange(range) {
    return range.reduce(function (prev, current) {
        return prev + current;
    });
}

function rangeFrom(values) {
    return Array.apply(0, Array(maxOf(values))).map(function (value, index) {
        return index + minOf(values);
    });
}

var range = rangeFrom([1, 13]);
console.log(leastCommonMultipleOfRange(range, 0, sumOfRange(range)));

},{}]},{},[1]);
