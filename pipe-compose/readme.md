
# pipe and compose function

### pipe

``` ts

function sleep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000);
    });
  }

  const testtest = async () => {
    const fn1 = async (val: string) => {
      await sleep();
      return `fn1(${val})`;
    };
    const fn2 = async (val: string) => {
      await sleep();
      return `fn2(${val})`;
    };
    const fn3 = async (val: string) => {
      await sleep();
      return `fn3(${val})`;
    };
    return pipe(
      fn1,
      fn2,
      fn3
    )('inner');
  };

  await testtest() // 'fn3(fn2(fn1(inner)))'
```

### compose

``` ts
function sleep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 1000);
    });
  }

  const testtest = async () => {
    const fn1 = async (val: string) => {
      await sleep();
      return `fn1(${val})`;
    };
    const fn2 = async (val: string) => {
      await sleep();
      return `fn2(${val})`;
    };
    const fn3 = async (val: string) => {
      await sleep();
      return `fn3(${val})`;
    };
    return (await compose(
      fn1,
      fn2,
      fn3
    ))('inner');
  };

  await testtest() // 'fn1(fn2(fn3(inner)))'
```