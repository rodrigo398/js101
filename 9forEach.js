function delay() {
  return new Promise(resolve => setTimeout(resolve, 3000));
}

async function delayLog(item) {
  // notice that we can await a function
  // that returns a promise
  await delay();
  console.log(item);
}
/* async function processArray(array) {
  array.forEach(async item => {
    await delayLog(item);
  });
  console.log('Done!');
} */

/* // process array in sequence
async function processArray(array) {
  for (const item of array) {
    await delayLog(item);
  }
  console.log('Done');
} */

// process array in Parallel
async function processArray(array) {
  const promises = array.map(delayLog);

  await Promise.all(promises);

  console.log('Done');
}

processArray([1, 2, 3, 6]);
