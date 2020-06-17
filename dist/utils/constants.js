'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DEFAULTS = exports.RC = exports.VERSION = undefined;

var _package = require('../../package.json');

const VERSION = exports.VERSION = _package.version;

const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];

const RC = exports.RC = `${HOME}/.zmmrc`;

const DEFAULTS = exports.DEFAULTS = {
    registry: 'nb-l',
    type: 'users'
};