function getUser(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getUser', email);
      resolve({ userEmail: email });
    }, 1000);
  });
}

function getVideos(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getVideos', userName);
      resolve(['vid1', 'vid2', 'vid3']);
    }, 5000);
  });
}

const promisesToMake = [getUser('myname'), getVideos('myVideos')];

myPromiseAll(promisesToMake).then(([getUser, getVideos]) => {
  console.log('getUser:', getUser);
  console.log('getVidoes:', getVideos);
});

function myPromiseAll(promises) {
  let results = [];
  let completedPromises = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then(value => {
          results[index] = value;
          completedPromises += 1;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
}
