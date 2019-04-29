# Running TypeScript ES Modules with Node.js

Following [Announcing a new experimental modules](https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff) post, this repository is an example of a TypeScript app running with the new `experimental modules` feature shipped with Node.js 12. As explained in the linked post, it's now possible to use `import` and `export` syntax in `js` files, so ES Modules transpiled from TypeScript can be used out of the box 😎

## 🌳 Project tree

```
.
├── LICENSE.md
├── README.md
├── lerna.json
├── package-lock.json
├── package.json
├── packages
│   ├── app //--> TypeScript app transpiled as an ES Module, using es-module dependency
│   │   ├── README.md
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── app.ts
│   │   │   └── sayHelloLocal.ts
│   │   └── tsconfig.json
│   └── es-module //--> ES Module written in TypeScript
│       ├── README.md
│       ├── package-lock.json
│       ├── package.json
│       ├── src
│       │   └── index.ts
│       └── tsconfig.json
└── tsconfig.settings.json
```

## 🛠️ Config

### Node.js

- `type: module`: New package.json field to treat all `.js` files in project as ES Modules, see [app](./packages/app/package.json) and [es-module](./packages/es-module/package.json) files.
- `--experimental-modules`: Flag to enable new experimental modules feature.
- `--es-module-specifier-resolution=node`: By default, file extensions are mandatory in import, this flag enable CommonJS-style automatic extension resolution behavior. This flag is required because TypeScript do not add imported file extension in transpiled code.

### TypeScript

- `module: "es2015"`: Set the module code generation to `ES2015`, aka `ES6`, see inherited [tsconfig.settings.json](./tsconfig.settings.json)

## 🚀 Run the app

1. Install [Node.js 12](https://nodejs.org/en/blog/release/v12.0.0/) or type `nvm use` if you use [nvm](https://github.com/creationix/nvm)
2. Install project dependencies with `npm install`
3. Start app with: `npm run start`
4. Browse `http://localhost:3000`

You should see the following JSON message:

```json
{
  "messages": ["Hello from ES Module dependency", "Hello from local ES Module"]
}
```

## License

[MIT licensed](./License.md).
