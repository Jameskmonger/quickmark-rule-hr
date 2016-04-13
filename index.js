'use strict';

var REGEXP = /^(\-{3,})(?:\n|\\n|$)/;

module.exports = function (input) {
    var parsed = REGEXP.exec(input);

    if (parsed) {
        // HR is not rendered so parsed can just be empty
        return {
            original: parsed[0],
            parsed: ''
        };
    }

    return undefined;
};
