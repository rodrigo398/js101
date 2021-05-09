// https://careersjs.com/magazine/javascript-job-queue-microtask/

function firstFunction() {
  console.log('ENTRA firstFunction');
  thirdFunction();

  const firstResponse = Promise.resolve('1st Promise');
  const secondResponse = Promise.resolve('2nd Promise');

  setTimeout(() => {
    firstResponse.then(res => {
      console.log(res);
    });
  });

  secondResponse.then(res => {
    console.log(res);
  });
}

function thirdFunction() {
  console.log('ENTRA thirdFunction');
  const thirdResponse = Promise.resolve('3rd Promise');
  const fourthResponse = Promise.resolve('4th Promise');

  queueMicrotask(() => {
    console.log('Hello from the microtask queue');
  });

  thirdResponse.then(res => {
    console.log(res);
  });

  setTimeout(() => {
    fourthResponse.then(res => {
      console.log(res);
    });
  });
}

function secondFunction() {
  console.log('ENTRA second1');
  let i = 0;
  let start = Date.now();

  for (let j = 0; j < 5e9; j++) {
    i++;
  }
  console.log('First heavy Loop done in ' + (Date.now() - start) + 'ms');
}

function secondFunction2() {
  console.log('ENTRA second22');
  let i = 0;
  let start = Date.now();

  for (let j = 0; j < 6e9; j++) {
    i++;
  }
  console.log('SECOND heavy Loop done in ' + (Date.now() - start) + 'ms');
}

// Execution begin

setTimeout(() => {
  console.log('first timeout');
});

console.log('FIRST console log');

setTimeout(() => {
  console.log('second setTimeout');
});

firstFunction();
secondFunction();
console.log('SECOND console log');

secondFunction2();
