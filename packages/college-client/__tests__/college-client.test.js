'use strict';

const collegeClient = require('..');
const assert = require('assert').strict;

assert.strictEqual(collegeClient(), 'Hello from collegeClient');
console.info('collegeClient tests passed');
