const fetch = require('node-fetch');

const promiseAllAsyncAwait = async function () {
  if (!arguments.length) {
    return null;
  }
  let args = arguments;
  if (args.length === 1 && Array.isArray(args[0])) {
    args = args[0];
  }
  const total = args.length;
  const result = [];
  for (let i = 0; i < total; i++) {
    try {
      const res = await Promise.resolve(args[i]);
      if (res) {
        result.push(res);
      }
    } catch (err) {
      return err;
    }
  }
  return result;
};

promiseAllAsyncAwait([
  fetch('https://jsonplaceholder.typicode.com/posts/1'),
  fetch('https://jsonplaceholder.typicode.com/todos/1'),
]).then(([foo, bar]) => {
  console.log('foo', foo);
  console.log('bar', bar);
});
