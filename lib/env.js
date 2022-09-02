"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ENV
 * @param key {string}
 * @param defaultValue {any}
 * @return {number|string|null}
 */
function default_1(key, defaultValue) {
    const value = process.env[key];
    if (value) {
        return typeof defaultValue === 'number' || defaultValue === Number ? (isNaN(+value) ? value : +value) : value;
    }
    else {
        return defaultValue ?? null;
    }
}
exports.default = default_1;
