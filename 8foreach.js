/* const waitFor = ms => new Promise(r => setTimeout(r, ms));

[1, 2, 3, 4].forEach(async num => {
  await waitFor(5000);
  console.log(num);
}); */

const waitFor = ms => new Promise(r => setTimeout(r, ms));

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

console.log('BEFORE');

/* asyncForEach([1, 2, 3, 4], async num => {
  await waitFor(3000);
  console.log(num);
}); */

const start = async () => {
  await asyncForEach([2, 3, 34, 5], async num => {
    await waitFor(2000);
    console.log(num);
  });
};

start();

console.log('DONE');
