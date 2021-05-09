const fetch = require('fetch').fetchUrl;

function nose(newArr) {
  const [val1, val2] = newArr;

  return new Promise(resolve => {
    resolve([val1, val2]);
  });
}

const fetch1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
const fetch2 = fetch('https://jsonplaceholder.typicode.com/posts/1');

nose([fetch1, fetch2]).then(([res1, res2]) => {
  console.log(res1);
  console.log(res2);
});
