function promise1(val1) {
  return new Promise(resolve => {
    resolve(val1 + 2);
  });
}

function promise2(val1) {
  return new Promise(resolve => {
    resolve(val1 * 3);
  });
}

// promise1(2).then(res => console.log(res));

/* let aca;

const nose2 = async () => {
  const nose = await promise2(3);
  aca = nose;

  return nose;
};

nose2().then(res => console.log(res)); */

function esto() {
  return async () => {
    const jaja = await promise1(2);
    return jaja;
  };
}

const aca = esto();

console.log(aca);

/* function resolvePromise(promises) {
  [prom1, prom2] = promises;
  console.log(prom1);
  return new Promise(resolve => {
    resolve(3);
  });
}

resolvePromise([promise1(2), promise1(9)]);
 */
