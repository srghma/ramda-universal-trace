[![Greenkeeper badge](https://badges.greenkeeper.io/BjornMelgaard/ramda-universal-trace.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/BjornMelgaard/ramda-universal-trace.svg?branch=master)](https://travis-ci.org/BjornMelgaard/ramda-universal-trace)

# ramda-universal-trace
Trace function that works fine both in browser and node

**Signature**: String -> a -> a

In browser it will use
```ts
console.log(message, subject)
```

but in node:
```ts
const options = { showHidden: true, depth: 40 }
console.log(message, util.inspect(subj, options))
```

Original idea was drawn from [this gist](https://gist.github.com/jaysoo/7b1298bcc98ef9ac71e6dd0383a07dc3)

## Usage

```ts
import * as R from 'ramda'
import trace from 'ramda-universal-trace'

const performComplexCalc = R.compose(
    trace('after'),
    R.subtract(__, 2),
    R.divide(__, 4),
    trace('middle'),
    R.multiply(10),
    R.add(10),
    trace('before')
)
```

## Installation
`npm i ramda-universal-trace` or `yarn add ramda-universal-trace`

