const fetch = require('node-fetch');

const promisesToResolve = [
  fetch('https://collectednotes.com/rodrigo398.json'),
  fetch('https://collectednotes.com/sergiodxa.json'),
];

myPromiseAll(promisesToResolve).then(([rodrigo398, sergio]) => {
  console.log(rodrigo398.site);
  console.log(sergio.site);
});

function myPromiseAll(promises) {
  let resultsToReturn = [];
  let completedPromises = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then(async result => {
          const json = await result.json();
          resultsToReturn[index] = json;
          completedPromises += 1;
          if (completedPromises === promises.length) {
            resolve(resultsToReturn);
          }
        })
        .catch(err => reject(err));
    });
  });
}

//const notes = fetch('https://collectednotes.com/rodrigo398.json')
