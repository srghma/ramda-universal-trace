module.exports = {
  verbose:   true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex:            'test/.*\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleDirectories:    ['node_modules', 'src'],
}
