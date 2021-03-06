"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipe_1 = require("./pipe");
it('pipe function', async () => {
    function sleep() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000);
        });
    }
    const testtest = async () => {
        const fn1 = async (val) => {
            await sleep();
            return `fn1(${val})`;
        };
        const fn2 = async (val) => {
            await sleep();
            return `fn2(${val})`;
        };
        const fn3 = async (val) => {
            await sleep();
            return `fn3(${val})`;
        };
        return pipe_1.pipe(fn1, fn2, fn3)('inner');
    };
    expect(await testtest()).toEqual('fn3(fn2(fn1(inner)))');
});
//# sourceMappingURL=pipe.test.js.map