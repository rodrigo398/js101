// write a function sum

//sum(1)(2)(3)(4)(5)(result => console.log('result: ', result));

// We can apply concepts like: closures, HOF, callbacks

function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          return function (callback) {
            const total = a + b + c + d + e;
            callback(total);
          };
        };
      };
    };
  };
}

sum(1)(2)(3)(4)(5)(result => console.log('total: ', result));
