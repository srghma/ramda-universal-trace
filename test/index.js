import { trace, traceMod } from '../src'

describe('trace', () => {
  const message = 'message'

  it('test without modFn', () => {
    const tracer = trace(message)

    expect(tracer(1)).toBe(1)
  })

  it('test with modFn', () => {
    const tracer = traceMod(x => x + 1, message)

    expect(tracer(1)).toBe(1)
  })
})
