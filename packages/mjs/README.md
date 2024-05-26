## ECMAScript

To opt-in for ES modules by default, we need to add "type":"modules" in our `package.json`. Otherwise, `.js` extensions are interpreted as `.cjs`.

### Using `node` directly

```
$ node index.js
Hello from ECMAScript package
OS: darwin
Path: /build-example/packages/cjs

$ node index.mjs
Hello from ECMAScript package
OS: darwin
Path: /build-example/packages/cjs
```