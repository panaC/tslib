"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-any
exports.pipe = (fn1, ...fns) => {
    const piped = fns.reduce((prevFn, nextFn) => async (value) => nextFn(await prevFn(value)), async (value) => value);
    return async (...args) => piped(await fn1(...args));
};
//# sourceMappingURL=pipe.js.map