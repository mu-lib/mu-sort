'use strict';

/* istanbul ignore next */

if (typeof define === 'function' && define.amd) {

    define(['./dist/amd/sort'], function(sort) {
        return sort;
    });

} else if (typeof exports === 'object') {

    module.exports = require('./dist/cjs/sort');

} else throw Error("Cannot find a module loader");
