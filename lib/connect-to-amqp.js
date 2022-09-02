"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = __importDefault(require("amqplib"));
const env_1 = __importDefault(require("./env"));
/**
 * CONNECT-TO-AMQP
 * @param callback {(channel: amqplib.Channel) => any}
 * @param options {amqplib.Options.Connect}
 * @return {Promise<void>}
 */
async function default_1(callback, options) {
    const connection = await amqplib_1.default.connect(options || (0, env_1.default)('AMQP_URL', 'amqp://localhost'));
    const channel = await connection.createChannel();
    callback(channel);
}
exports.default = default_1;
