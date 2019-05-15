export declare const compose: <R>(fn1: (a: R) => Promise<R>, ...fns: ((a: R) => Promise<R>)[]) => Promise<(a: R) => Promise<R>>;
