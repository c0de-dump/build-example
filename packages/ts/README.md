## TypeScript

### Using `node` directly

```
$ node index.ts
(node:9945) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/maxq/rMaxiQp/build-example/packages/ts/index.ts:1
import os from 'node:os'
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1153:20)
    at Module._compile (node:internal/modules/cjs/loader:1205:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47

# After adding `"type":"module"` to our `package.json`
$ node index.ts
node:internal/errors:497
    ErrorCaptureStackTrace(err);
    ^

TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for index.ts
    at new NodeError (node:internal/errors:406:5)
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:99:9)
    at defaultGetFormat (node:internal/modules/esm/get_format:142:36)
    at defaultLoad (node:internal/modules/esm/load:120:20)
    at ModuleLoader.load (node:internal/modules/esm/loader:396:13)
    at ModuleLoader.moduleProvider (node:internal/modules/esm/loader:278:56)
    at new ModuleJob (node:internal/modules/esm/module_job:65:26)
    at #createModuleJob (node:internal/modules/esm/loader:290:17)
    at ModuleLoader.getJobFromResolveResult (node:internal/modules/esm/loader:248:34)
    at ModuleLoader.getModuleJob (node:internal/modules/esm/loader:229:17) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
}
```

### Using `tsc`

```
$ pnpm run build:tsc

$ pnpm run start:tsc
> ts@1.0.0 start:tsc /build-example/packages/ts
> node dist/index.js

hello world
path /build-example/packages/ts/dist
os darwin
```