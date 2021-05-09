function firstFunction() {
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
  let i = 0;
  let start = Date.now();

  for (let j = 0; j < 5e9; j++) {
    i++;
  }
  console.log('Loop done in ' + (Date.now() - start) + 'ms');
}

setTimeout(() => {
  console.log('first timeout');
});

firstFunction();
secondFunction();
console.log('first console log');
