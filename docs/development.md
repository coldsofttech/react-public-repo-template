# Development

## Setup

- Node 22 or newer. `.nvmrc` pins 24, the version used for linting, building and releasing.
- `npm ci` installs every workspace (`packages/*`, `examples/*`).
- `pip install pre-commit && pre-commit install --hook-type pre-commit --hook-type post-commit`.

## Scripts

All scripts run from the repository root.

| Script                            | Purpose                                                          |
| --------------------------------- | ---------------------------------------------------------------- |
| `npm run dev`                     | Start the demo app (build packages first with `npm run build`)   |
| `npm run build`                   | Build every package (Vite library mode, then `.d.ts` from JSDoc) |
| `npm run lint`                    | ESLint across the repository                                     |
| `npm run format` / `format:check` | Prettier write / check, including Markdown                       |
| `npm test` / `test:coverage`      | Vitest; coverage thresholds live in `vitest.config.js`           |
| `npm run check:packages`          | `publint` and `@arethetypeswrong/cli` on each built package      |

## Conventions

- Plain JavaScript with ES modules. Types are written as JSDoc and checked through `jsconfig.json`.
- Each package declares `exports`, `types`, `files` and `sideEffects: false`, and builds and tests on its own. Its test environment is set in its `vite.config.js`.
- Framework dependencies are `peerDependencies`. Packages never import from an application.
- Prettier owns formatting for all files. markdownlint is not used.

## CI

`ci.yml` runs `lint`, `test` (Node 22, 24, 26 on Ubuntu; Node 24 on Windows and macOS) and `build`. The final `ci` job is the single required check for the `main` ruleset. `audit.yml` runs `npm audit` weekly and when `package-lock.json` changes.

## Release

1. Set the new `version` in the package's `package.json` and merge it.
2. Publish a GitHub release tagged `<package name>@<version>`, for example `@scope/example-package@1.0.0`.
3. `release.yml` checks the tag against the package version, builds, and publishes to npm with provenance through the `npm` environment. See [repo-setup.md](repo-setup.md) for the one-time npm setup.

## Cleanup

`sweepito.toml` uses the `node` profile at `safe` risk. `dist/` and `coverage/` are `configurable` in Sweepito, so they are kept unless enabled explicitly.
