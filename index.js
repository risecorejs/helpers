"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_to_amqp_1 = __importDefault(require("./lib/connect-to-amqp"));
const env_1 = __importDefault(require("./lib/env"));
const get_include_aliases_by_order_prefixes_1 = __importDefault(require("./lib/get-include-aliases-by-order-prefixes"));
const get_models_1 = __importDefault(require("./lib/get-models"));
const get_redis_client_1 = __importDefault(require("./lib/get-redis-client"));
const pluralize_1 = __importDefault(require("./lib/pluralize"));
const set_global_structs_1 = __importDefault(require("./lib/set-global-structs"));
exports.default = {
    connectToAMQP: connect_to_amqp_1.default,
    env: env_1.default,
    getIncludeAliasesByOrderPrefixes: get_include_aliases_by_order_prefixes_1.default,
    getModels: get_models_1.default,
    getRedisClient: get_redis_client_1.default,
    pluralize: pluralize_1.default,
    setGlobalStructs: set_global_structs_1.default
};
