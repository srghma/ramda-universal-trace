import babel from 'rollup-plugin-babel'

const { name, version } = require('./package.json')

const banner = `// ${name} v${version}`

const config = {
  input:  'src/index.js',
  banner,
  name,
  output: [
    {
      file:   'cjs/index.js',
      format: 'cjs',
    },
    {
      file:   'es/index.js',
      format: 'es',
    },
  ],
  external: id => /ramda/.test(id),
  plugins:  [
    babel({
      babelrc:         false,
      // runtimeHelpers: true,
      // externalHelpers: true,
      exclude:         'node_modules/**',
      presets:         [
        [
          'env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        // 'external-helpers',
        // 'transform-runtime',
        [
          'lodash',
          {
            id: ['ramda'],
          },
        ],
      ],
    }),
  ],
}

export default config
