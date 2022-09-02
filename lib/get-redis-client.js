"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = __importDefault(require("redis"));
const env_1 = __importDefault(require("./env"));
/**
 * GET-REDIS-CLIENT
 * @param options
 * @return
 */
async function default_1(options) {
    options ||= {
        socket: {
            host: (0, env_1.default)('REDIS_HOST', 'localhost'),
            port: (0, env_1.default)('REDIS_PORT', 6379)
        },
        database: (0, env_1.default)('REDIS_DATABASE', 0)
    };
    const client = redis_1.default.createClient(options);
    await client.connect();
    return client;
}
exports.default = default_1;
