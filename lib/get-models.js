"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const env_1 = __importDefault(require("./env"));
/**
 * GET-MODELS
 * @param options {IOptions}
 * @return {IFieldsWithSequelize}
 */
function default_1(options) {
    const config = getConfig(options);
    const sequelize = new sequelize_1.Sequelize(config);
    const db = {
        sequelize
    };
    const modelsDir = path_1.default.resolve.apply(null, options.modelsDir);
    for (const file of fs_1.default.readdirSync(modelsDir)) {
        if (file.endsWith('.js')) {
            const modelPath = path_1.default.join(modelsDir, file);
            const getModel = require(modelPath);
            const Model = getModel(sequelize);
            db[Model.name] = Model;
        }
    }
    for (const key in db) {
        if (db.hasOwnProperty(key) && db[key].associate) {
            db[key].associate(db);
        }
    }
    return db;
}
exports.default = default_1;
/**
 * GET-CONFIG
 * @param options {IOptions}
 */
function getConfig(options) {
    const configPath = path_1.default.resolve.apply(null, options.configPath);
    const config = require(configPath);
    return options.NODE_ENV ? config[(0, env_1.default)('NODE_ENV', 'development')] : config;
}
