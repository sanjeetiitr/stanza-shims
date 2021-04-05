"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const RNRandomBytes = tslib_1.__importStar(require("expo-random"));
tslib_1.__exportStar(require("./index.browser"), exports);
async function randomBytes(size) {
    const buff = await RNRandomBytes.getRandomBytes(size);
    return buff;
}
exports.randomBytes = randomBytes;
