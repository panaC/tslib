export declare const pipe: <T extends any[], R>(fn1: (...args: T) => Promise<R>, ...fns: ((a: R) => Promise<R>)[]) => (...args: T) => Promise<R>;
