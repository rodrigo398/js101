function fn(array) {
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

const jaja = fn([4, 5, 6]);

const p1 = jaja();

const p2 = jaja();

const p3 = jaja();
