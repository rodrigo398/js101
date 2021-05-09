function promiseAll() {
  if (!arguments.length) {
    return Promise.resolve(null);
  }
  var args = arguments;
  if (args.length === 1 && Array.isArray(args[0])) {
    args = args[0];
  }
  var count = 1;
  var total = args.length;
  var result = [];
  function resolveHandler(val, cb) {
    result.push(val);
    if (count === total) {
      cb(result);
    }
    count++;
  }
  return new Promise(function (resolve, reject) {
    for (var i = 0; i < total; i++) {
      Promise.resolve(args[i])
        .then(function (value) {
          resolveHandler(value, resolve);
        })
        .catch(function (error) {
          reject(error);
        });
    }
  });
}
// es-next-gen way using async await
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
