const fetch = require('node-fetch');

let count = 1;
let total = 2;
let resultToReturn = [];

function resolveHandler(value, callback) {
  // console.log(value.then(res => res.json()).then(json => json));
  resultToReturn.push(value);
  if (count === total) {
    callback(resultToReturn);
  }
  count++;
}

/* function myPromiseAll(fetchToReturn) {
  fetchToReturn.forEach(promise => {
    promise.then(res => res.json()).then(json => console.log(json));
  });
} */

/*   return new Promise((resolve, reject) => {
    fetchToReturn.forEach(promise => {
      Promise.resolve(promise).then(value => {
        console.log(value);
      });
    });
  });
} */

/* function myPromiseAll(promises) {
  console.log(typeof promises[0]);
  return new Promise(resolve => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(result => {
        // console.log(result);
        resolveHandler(result, resolve);
      });
    });
  });
} */

function myPromiseAll(fetchToReturn) {
  return new Promise(resolve => {
    let results = [];
    fetchToReturn.forEach(promise => {
      results.push(promise.then(res => res.json()).then(json => json));
    });
    console.log(results[0]);
    resolve(results);
  });
}

myPromiseAll([
  fetch('https://jsonplaceholder.typicode.com/posts/1'),
  fetch('https://jsonplaceholder.typicode.com/todos/1'),
]).then(([foo, bar]) => {
  console.log('foo', foo);
  console.log('bar', bar);
});
