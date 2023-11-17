# TS with Jest

```bash
npm test -- --testPathPattern="addition.test"
```

- `npm test`: This is a shorthand for running the test script defined in your `package.json` file. The actual command executed depends on how the "test" script is configured.

- `--`: This is a separator that indicates that the options following it are meant for the command itself (in this case, Jest) and not for npm.

- `--testPathPattern="addition.test"`: This is an option specific to Jest. It allows you to specify a regular expression pattern to match against test file paths. In this case, it tells Jest to only run tests from files that match the pattern "addition.test".

To get more details about Jest command-line options, you can refer to the official Jest documentation:

- [Jest Command Line Interface (CLI)](https://jestjs.io/docs/en/cli)

For specific information about the `--testPathPattern` option, you can find it here:

- [`--testPathPattern` - Jest CLI Options](https://jestjs.io/docs/en/cli#--testpathpattern-regex)

## Short hand

```bash
npm run test-specific "addition.test"
```
