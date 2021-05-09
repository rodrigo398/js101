// 1 — Small sequencing of async jobs (SSAJ)
/* function resolveIn(time, val) {
  return new Promise(resolve => setTimeout(() => resolve(val), time));
}

async function example() {
  console.time('Example time');

  const a = await resolveIn(3000, 'a');
  const b = await resolveIn(2000, a);

  console.log(a, b);

  console.timeEnd('Example time');
}
example(); */

// 2—Small Parallelism of Async Jobs (SPAJ) with delay await statement after kick-off.
function resolveIn(time, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

async function example() {
  console.time('Example time');

  const aPromise = resolveIn(3000, 'a');
  const bPromise = resolveIn(2000, 'b');

  console.log(await aPromise, await bPromise);
  console.log(await Promise.all([aPromise, bPromise]));

  console.timeEnd('Example time');
}

example();
