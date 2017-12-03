// https://stackoverflow.com/a/24279593/3574379
const isNode =
  (typeof process as any) === 'object' &&
  Object.prototype.toString.call(process) === '[object process]'

let logger: any = null
if (isNode) {
  // eslint-disable-next-line global-require
  const util = require('util')
  const options = { showHidden: true, depth: 40, colors: true }
  logger = (message: string, x: any) => {
    // eslint-disable-next-line no-console
    console.log(message, util.inspect(x, options))
  }
} else {
  // eslint-disable-next-line no-console
  logger = console.log
}

export interface TraceFn {
  /**
   * Prints message with subject to console and returns subject
   */
  <T>(message: string, modFn: any, x: T): T
  (message: string, modFn?: any): <T>(x: T) => T
}

const trace: TraceFn = (...args: any[]) => {
  if (args.length === 3) {
    const [message, modFn, x] = args
    logger(message, modFn(x))
    return x
  } else {
    return (x: any) => {
      const [message, modFn] = args
      const modx = modFn ? modFn(x) : x

      logger(message, modx)
      return x
    }
  }
}

export default trace
