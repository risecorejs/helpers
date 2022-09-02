"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PLURALIZE
 * @param number {number}
 * @param words {string[]}
 * @param concat {boolean?}
 * @return {string}
 */
function default_1(number, words, concat) {
    const _number = +String(number).replaceAll('.', '');
    const result = words[_number % 100 > 4 && _number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][Math.min(_number % 10, 5)]];
    return concat ? number + ' ' + result : result;
}
exports.default = default_1;
