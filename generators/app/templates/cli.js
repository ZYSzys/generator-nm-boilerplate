#!/usr/bin/env node

'use strict';

const <%= camelModuleName %> = require('.');

const args = process.argv.slice(2);

console.log(<%= camelModuleName %>(args[0] || 'unicorns'));
