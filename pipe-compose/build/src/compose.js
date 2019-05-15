"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = async (fn1, ...fns) => fns.reduce((prevFn, nextFn) => async (value) => prevFn(await nextFn(value)), await fn1);
//# sourceMappingURL=compose.js.map