import trace from '../src'

describe('trace', () => {
  const message = 'message';

  it('test without modFn', () => {
    const tracer = trace(message)

    expect(tracer(1)).toBe(1)
  })

  it('test without modFn', () => {
    const tracer = trace(message, (x: any) => x + 1)

    expect(tracer(1)).toBe(1)
  })
});
