# Skeleton PNPM+TypeScript monorepo

This project is a skeleton monorepo using PNPM and TypeScript

## Setup

Install [pnpm](https://pnpm.js.org/) globally:

```
npm install -g pnpm
```

Install dependencies:

```
pnpm install
```

To run a script in all packages:

```
pnpm recursive run clean
pnpm recursive run build
pnpm recursive run test
```
For full usage instructions see https://pnpm.js.org/en/cli/recursive


## Filtering

Select a single package. This will build `projects/say`:

```
pnpm recursive run build --filter say 
```

Select a package and its dependencies. This will build `projects/say` and `packages/messages`:

```
pnpm recursive run build --filter say...
```

Select a package and its dependents. This will build `packages/messages` and `projects/say`:

```
pnpm recursive run build --filter ...messages
```

For more information see https://pnpm.js.org/en/filtering.