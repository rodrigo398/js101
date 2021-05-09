function myPromise(val1) {
  return new Promise(resolve => {
    resolve(val1 * 2);
  });
}

myPromise(3).then(res => console.log(res));
