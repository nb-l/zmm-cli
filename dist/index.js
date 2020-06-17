"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
let apply = (action, ...args) => {
    //babel-env
    require(`./${action}`)(...args);
};

exports.default = apply;