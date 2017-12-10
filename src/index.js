import * as R from 'ramda'

// https://stackoverflow.com/a/24279593/3574379
export function isNode() {
  return (
    typeof process === 'object' &&
    Object.prototype.toString.call(process) === '[object process]'
  )
}

export function makeInspect(options) {
  return (function() {
    const util = require('util')

    function inspect(obj) {
      return util.inspect(obj, options)
    }

    return inspect
  })()
}

export function wrapWithInspect(inspectOptions, log) {
  const node = isNode()

  if (node) {
    const inspect = makeInspect(inspectOptions)

    return (message, obj) => {
      log(message, inspect(obj))
    }
  }
  return log
}

export const defaultLogger = wrapWithInspect(
  {
    showHidden: true,
    depth:      40,
    colors:     true,
  },
  console.log,
)

export const traceMeta = R.curryN(4, (logger, modFn, message, obj) => {
  logger(message, modFn(obj))
  return obj
})

export const traceMod = traceMeta(defaultLogger)
export const trace = traceMod(R.identity)
