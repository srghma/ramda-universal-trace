// ramda-universal-trace v0.0.4
import _identity from 'ramda/src/identity';
import _curryN from 'ramda/src/curryN';

// https://stackoverflow.com/a/24279593/3574379
function isNode() {
  return (typeof process === 'undefined' ? 'undefined' : babelHelpers.typeof(process)) === 'object' && Object.prototype.toString.call(process) === '[object process]';
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

export { isNode, makeInspect, wrapWithInspect, defaultLogger, traceMeta, traceMod, trace };
