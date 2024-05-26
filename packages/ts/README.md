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

### Transpilation

- tsc (TypeScript compiler)
- babel (`create-react-app` [dependency](https://github.com/facebook/create-react-app?tab=readme-ov-file#philosophy))
- esbuild (`vite` [dependency](https://vitejs.dev/guide/features#typescript))

```
$ pnpm run build:<transpiler>

$ pnpm run start:<transpiler>
```

### `tsc` vs `babel`

> A lot of the time the answer is “it depends”, or “someone may have decided for you” depending on the project. If you are building your project with an existing framework like tsdx, Angular, NestJS or any framework mentioned in the Getting Started then this decision is handled for you.
> 
> However, a useful heuristic could be:
> - Is your build output mostly the same as your source input files? Use `tsc`
> - Do you need a build pipeline with multiple potential outputs? Use `babel` for transpiling and `tsc` for type checking

https://www.typescriptlang.org/docs/handbook/babel-with-typescript.html#babel-vs-tsc-for-typescript

### Note

Though `esbuild` claims to be a bundler, Vite uses `esbuild` purely for transpilation purpose, and depends on `rollup` because of its [ecosystem](https://vitejs.dev/guide/why.html#why-not-bundle-with-esbuild).