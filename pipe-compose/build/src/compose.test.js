"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = require("./compose");
it('compose function', async () => {
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
        return (await compose_1.compose(fn1, fn2, fn3))('inner');
    };
    expect(await testtest()).toEqual('fn1(fn2(fn3(inner)))');
});
//# sourceMappingURL=compose.test.js.map