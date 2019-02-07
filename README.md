# npm-ts-module-template

![](https://img.shields.io/travis/JosephMart/npm-ts-module-template.svg?style=for-the-badge)
![](https://img.shields.io/coveralls/github/JosephMart/npm-ts-module-template.svg?style=for-the-badge)

Custom TypeScript setup for creating a npm module

## Installation

```sh
npm install module --save
yarn add module
```

## Usage

### Javascript

```javascript
var module = require('module');
```

### TypeScript

```typescript
import { module } from 'module';
```

## Test

```sh
npm run test
```

## Deploy

```sh
npm publish # publish it
npm version patch # bump a new patch version of the package

# NPM scripts
prepare # will run both BEFORE the package is packed and published, and on local npm install
prepublishOnly # will run BEFORE prepare and ONLY on npm publish
preversion # will run before bumping a new package version
version # will run after a new version has been bumped
postversion # will run after the commit has been made
```
