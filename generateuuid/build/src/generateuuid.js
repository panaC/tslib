"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUUID = () => Math.random()
    .toString(36)
    .substring(2, 15) +
    '-' +
    Math.random()
        .toString(36)
        .substring(2, 15) +
    '-' +
    Math.random()
        .toString(36)
        .substring(2, 15) +
    '-' +
    Math.random()
        .toString(36)
        .substring(2, 15) +
    '-' +
    Math.random()
        .toString(36)
        .substring(2, 15) +
    '-' +
    Math.random()
        .toString(36)
        .substring(2, 15);
//# sourceMappingURL=generateuuid.js.map