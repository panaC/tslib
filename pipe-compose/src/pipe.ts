// tslint:disable-next-line:no-any
export const pipe = <T extends any[], R>(
  fn1: (...args: T) => Promise<R>,
  ...fns: Array<(a: R) => Promise<R>>
) => {
  const piped = fns.reduce(
    (prevFn, nextFn) => async (value: R) => nextFn(await prevFn(value)),
    async (value: R) => value
  );
  return async (...args: T) => piped(await fn1(...args));
};
