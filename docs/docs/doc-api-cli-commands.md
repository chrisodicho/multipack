---
id: doc-api-cli-commands
title: CLI Commands
sidebar_label: CLI Commands
---

`npm run build:packages` - build all packages with `webpack` in `production` mode

`npm run watch:packages` - start `webpack` in watch mode to rebuild packages on each change

`npm run version:packages` - Bump package versions and Create release tags

`npm run publish:packages:npm` - publish packages where the latest version is not present in the `NPM` registry

`npm run publish:packages:github` - publish packages where the latest version is not present in the `GitHub` registry

`npm run link:packages` - will installing all packages dependencies and linking any cross-dependencies in each package

`npm run test:packages` - run `jest` tests in each package and colect coverage from all packages

`npm run watch:test:packages` - run and watch all tests for changes

`npm run lint:packages` - lint all packages

`npm run fix:packages` - lint and fix all packages

`npm run start:docs` - start a [Docusaurus](https://docusaurus.io/) server that serve files from `/docs` folder predestinated for docs.

`npm run publish:docs` - publish generated docs with [Docusaurus](https://docusaurus.io/) to `Github Pages`
