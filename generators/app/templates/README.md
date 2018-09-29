# <%= repoName %> 

[![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= repoName %>)<% if (codecov) { %> 
[![codecov](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>/badge.svg?branch=master)](https://codecov.io/gh/<%= githubUsername %>/<%= repoName %>?branch=master)<% } %> 
[![NPM version](https://img.shields.io/npm/v/<%= repoName %>.svg?style=flat)](https://npmjs.com/package/<%= repoName %>)
[![NPM downloads](https://img.shields.io/npm/dm/<%= repoName %>.svg?style=flat)](https://npmjs.com/package/<%= repoName %>) 
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/<%= githubUsername %>/<%= repoName %>.svg)](https://github.com/<%= githubUsername %>/<%= repoName %>/blob/master/LICENSE)

> <%= moduleDescription %><% if (!cli) { %>


## Install

```
$ npm install <%= moduleName %>
```


## Usage

```js
const <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('unicorns');
//=> 'unicorns & rainbows'
```


## API

### <%= camelModuleName %>(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `Object`

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.<% } %><% if (cli) { %>
## Install

```
$ npm install --global <%= moduleName %>
```

## Usage
```
$ <%= repoName %> --help

  Usage
    <%= repoName %> [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ <%= repoName %>
    unicorns & rainbows
    $ <%= repoName %> ponies
    ponies & rainbows
```<% } %>


## License

MIT © [<%= name %>](<%= website %>)
