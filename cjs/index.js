// ramda-universal-trace v0.0.4
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _identity = _interopDefault(require('ramda/src/identity'));
var _curryN = _interopDefault(require('ramda/src/curryN'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// https://stackoverflow.com/a/24279593/3574379
function isNode() {
  return (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && Object.prototype.toString.call(process) === '[object process]';
}

function makeInspect(options) {
  return function () {
    var util = require('util');

    function inspect(obj) {
      return util.inspect(obj, options);
    }

    return inspect;
  }();
}

function wrapWithInspect(inspectOptions, log) {
  var node = isNode();

  if (node) {
    var inspect = makeInspect(inspectOptions);

    return function (message, obj) {
      log(message, inspect(obj));
    };
  }
  return log;
}

var defaultLogger = wrapWithInspect({
  showHidden: true,
  depth: 40,
  colors: true
}, console.log);

var traceMeta = _curryN(4, function (logger, modFn, message, obj) {
  logger(message, modFn(obj));
  return obj;
});

var traceMod = traceMeta(defaultLogger);
var trace = traceMod(_identity);

exports.isNode = isNode;
exports.makeInspect = makeInspect;
exports.wrapWithInspect = wrapWithInspect;
exports.defaultLogger = defaultLogger;
exports.traceMeta = traceMeta;
exports.traceMod = traceMod;
exports.trace = trace;
