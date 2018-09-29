# generator-nm-boilerplate 

[![NPM version](https://img.shields.io/npm/v/generator-nm-boilerplate.svg?style=flat)](https://npmjs.org/package/generator-nm-boilerplate)
[![Travis CI](https://travis-ci.org/ZYSzys/generator-nm-boilerplate.svg?branch=master)](https://travis-ci.org/ZYSzys/generator-nm-boilerplate)
[![NPM downloads](http://img.shields.io/npm/dm/generator-nm-boilerplate.svg?style=flat)](https://npmjs.org/package/generator-nm-boilerplate)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/ZYSzys/generator-nm-boilerplate.svg)](https://github.com/ZYSzys/generator-nm-boilerplate/blob/master/LICENSE)

> Boilerplate for scaffold out a node module

![](/screenshot.png)

## Features

- Unit test using [ava](https://github.com/avajs/ava)
- ESLint using [prettier](https://github.com/prettier/prettier)
- CI using [Travis](https://travis-ci.org/)
- License using [MIT](https://mit-license.org/) 
- Dependency update automation using [renovate](https://github.com/renovatebot/renovate)
- Optionally add coverage report
- Optionally add CLI

## Installation

Install [Yeoman](http://yeoman.io) and generator-nm-boilerplate using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-nm-boilerplate
```

## Usage

Generate your new project:

```bash
yo nm-boilerplate
```

*Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files.*

That'll generate a project with all the common tools setup. This includes:

- Filled `package.json` file
- [ava](https://github.com/avajs/ava) unit test and code coverage (optionally tracked on [codecov](https://codecov.io/))
- [eslint](http://eslint.org/) linting and code style checking [prettier](https://github.com/prettier/prettier)
- [nsp](https://nodesecurity.io/) known vulnerability check
- [Travis CI](https://travis-ci.org/) continuous integration
- [License](https://spdx.org/licenses/) using MIT
- [Renovate](https://github.com/renovatebot/renovate) dependency update automation


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [ZYSzys](zyszys.top)
