[![Greenkeeper badge](https://badges.greenkeeper.io/BjornMelgaard/ramda-universal-trace.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/BjornMelgaard/ramda-universal-trace.svg?branch=master)](https://travis-ci.org/BjornMelgaard/ramda-universal-trace)

# ramda-universal-trace
Trace function that works fine both in browser and node

In browser it will use
```js
console.log(message, subject)
```

but in node:
```js
const options = { showHidden: true, depth: 40, colors: true }
console.log(message, util.inspect(subj, options))
```

Original idea was drawn from [this gist](https://gist.github.com/jaysoo/7b1298bcc98ef9ac71e6dd0383a07dc3)

## API
```js
traceMeta = R.curryN(4, (logger, modFn, message, obj) => { ... })
traceMod = traceMeta(defaultLogger)
trace = traceMod(R.identity)
```

check source for more

## Usage

```js
import * as R from 'ramda'
import { trace, traceMod } from 'ramda-universal-trace'

const performComplexCalc = R.compose(
    trace('after'),
    R.subtract(__, 2),
    R.divide(__, 4),
    traceMod(R.prop('show_whats_on_this_key'), 'middle'),
    R.multiply(10),
    R.add(10),
    trace('before')
)
```

## Installation
`npm i ramda-universal-trace` or `yarn add ramda-universal-trace`

