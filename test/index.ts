import trace from '../src'

describe('trace', () => {
  const subj = 1;
  const message = 'message';

  it('tests logging (see output)', () => {
    trace(message, subj);
    trace(message)(subj);
  });
});
