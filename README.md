Following [Announcing a new experimental modules](https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff) post, this repository is an example of a TypeScript app running with the new `experimental modules` feature shipped with Node.js 12. As explained in the linked post, it's now possible to use `import` and `export` syntax in `js` files, so ES modules compiled from TypeScript can be used without modifications 😎

## Node.js config

- `type: module`: Treat all `.js` files in compiled project as ES modules, see [package.json](./package.json).
- `--experimental-modules`: Flag to enable experimental modules support
- `--es-module-specifier-resolution=node`: By default file extensions are mandatory in import, this flag enable CommonJS-style automatic extension resolution behavior. This flag is required because TypeScript do not add imported file extension in compiled code.

## Getting Started

1. Install [Node.js 12](https://nodejs.org/en/blog/release/v12.0.0/) or type `nvm use` if you use [nvm](https://github.com/creationix/nvm)
2. Start HTTP server with: `npm run start`
3. Browse `http://localhost:3000`

You should see the following JSON message:

```json
{
  "message": "Hello World"
}
```

## Scripts

- `clean`: Remove generated files
- `build`: Compile TypeScript sources to ES2018
- `start`: Start HTTP server with `--experimental-modules` and `--es-module-specifier-resolution=node`

## License

[MIT licensed](./License.md).
