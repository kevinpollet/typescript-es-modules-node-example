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
