'use strict';

const test = require('modunit');
const hr = require('./index');

test('it returns undefined for plain text', (t, input) => {

    let output = hr(input);

    t.assert.equal(undefined, output);

}, [
    ['apples and oranges'],
    ['plain text here'],
    ['woop dee doo']
]);
