'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _constants = require('./utils/constants');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let actionMap = {
    init: {
        description: 'generate a new project from a template',
        usages: ['zmm init templateName projectName']
    },
    config: {
        description: 'config .zmmrc',
        usages: ['zmm config set <k> <v>', 'zmm config get <k>', 'zmm config remove <k>']

    }
};

Object.keys(actionMap).forEach(action => {
    _commander2.default.command(action).description(actionMap[action].description).action(() => {
        switch (action) {
            case 'config':
                (0, _index2.default)(action, ...process.argv.slice(3));
                break;
            case 'init':
                (0, _index2.default)(action, ...process.argv.slice(3));
            default:
                break;
        }
    });
});

function help() {
    console.log('\r\nUsage:');
    Object.keys(actionMap).forEach(action => {
        actionMap[action].usages.forEach(usage => {
            console.log('  - ' + usage);
        });
    });
    console.log('\r');
}

_commander2.default.usage('<command> [options]');
_commander2.default.on('-h', help);
_commander2.default.on('--help', help);

_commander2.default.version(_constants.VERSION, '-V --version').parse(process.argv);

if (!process.argv.slice(2).length) {
    _commander2.default.outputHelp(make_green);
}

function make_green(txt) {
    return _chalk2.default.green(txt);
}