# Running the Kata Machine

## Test Case

```cmd
npx jest Linear 
```

## Test All

```cmd
yarn test
```

## [Generate](../kata-machine//README.md/)

`yarn generate` will also update the `package.json`, `tsconfig.json` and `jest.config` to point
the latest `day` folder via tspaths.  This allows us to avoid updating anything
for testing each day.
