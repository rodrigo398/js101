const fetch = require('node-fetch');

/* const fetch1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(json => console.log(json)); */

//const fetch2 = fetch('https://jsonplaceholder.typicode.com/posts/1');

const myResult = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const json = await result.json();
  return json;
};

myResult().then(res => console.log(res));
