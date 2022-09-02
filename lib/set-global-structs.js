"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const lodash_1 = __importDefault(require("lodash"));
/**
 * SET-GLOBAL-STRUCTS
 * @param dir {string?}
 * @return {void}
 */
function default_1(dir) {
    dir ||= path_1.default.resolve('structs');
    global.$structs = {};
    for (const file of fs_1.default.readdirSync(dir)) {
        const stat = fs_1.default.statSync(path_1.default.join(dir, file));
        if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.json'))) {
            const key = lodash_1.default.camelCase(path_1.default.parse(file).name);
            global.$structs[key] = require(path_1.default.join(dir, file));
        }
    }
    Object.freeze(global.$structs);
}
exports.default = default_1;
