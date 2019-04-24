Following [Announcing a new experimental modules](https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff) article on Medium this repository is an example of a TypeScript application running with the `experimental modules` feature allowing to use `import` and `export` syntax in `js` files released with Node.js 12.

## Node.js config

- `--experimental-modules`: Flag to enable experimental modules support
- `--es-module-specifier-resolution=node`: By default file extensions are mandatory in import statements, like `import ‘./file.js’`, this flag enable CommonJS-style automatic extension resolution behavior.
- `type: module`: Treat all `.js` files in compiled project as ES modules, see [package.json](./package.json).

## Getting Started

1. Install [Node.js 12](https://nodejs.org/en/blog/release/v12.0.0/) or type `nvm use` if you use [nvm](https://github.com/creationix/nvm)
2. Start fastify server with: `npm run start`
3. Browse `http://localhost:3000`

You should see the following output:

```json
{
  "message": "Hello World"
}
```

## Scripts

- `clean`: Remove generated files
- `build`: Compile TypeScript sources to ES2018
- `start`: Start fastify server with `--experimental-modules` and `--es-module-specifier-resolution=node`

## License

[MIT licensed](./License.md).
