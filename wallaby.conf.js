// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package');

const { files: tests } = packageJson.ava;

module.exports = () => ({
  files: [
    'src/**/*.js',
    'data/**/*.*',
    'tests/__data/**/*.*',
    'tests/helpers/**/*.js',
  ],
  tests,
  debug: true,
  testFramework: 'ava',
});
