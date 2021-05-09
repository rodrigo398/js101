function getUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email });
    }, 1000);
  });
}

function getUserResult({ userEmail }) {
  console.log('getResult: ', userEmail);
  getVideos(userEmail, getUserVideos);
}

function getVideos(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getVideos', userName);
      resolve(['vid1', 'vid2', 'vid3']);
    }, 2000);
  });
}

function getUserVideos([vid1, vid2, vid3]) {
  console.log('getUserVideos', vid1);
}

getUser('test@test.com', 'test')
  .then(({ userEmail }) => getVideos(userEmail))
  .then(([vid1, vid2, vid3]) => console.log(vid3));
