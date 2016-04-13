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

test('it returns undefined for one or two dashes', (t, input) => {

    let output = strong(input);

    t.assert.equal(undefined, output);

}, [
    ['-'],
    ['--']
]);

test('it returns an object with the correct \'original\' for three or more dashes', (t, input) => {

    let output = hr(input);

    t.assert.equal(input, output.original);

}, [
    ['---'],
    ['------'],
    ['---------']
]);
