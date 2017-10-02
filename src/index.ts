import { curryN } from 'ramda'

// https://stackoverflow.com/a/24279593/3574379
const isNode =
  (typeof process as any) === 'object' &&
  Object.prototype.toString.call(process) === '[object process]'

let logger: any = null
if (isNode) {
  // eslint-disable-next-line global-require
  const util = require('util')
  const options = { showHidden: true, depth: 40 }
  logger = (message: string, subj: any) => {
    // eslint-disable-next-line no-console
    console.log(message, util.inspect(subj, options))
  }
} else {
  // eslint-disable-next-line no-console
  logger = console.log
}

export interface TraceFn {
  /**
   * Prints message with subject to console and returns subject
   */
  <T>(message: string, subj: T): T
  (message: string): <T>(subj: T) => T
}

const trace: TraceFn = curryN(2, (message: string, subject: any) => {
  logger(message, subject)
  return subject
})

export default trace
