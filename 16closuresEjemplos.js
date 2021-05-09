function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score *= 2;
  };
  return newUser;
}

const user1 = userCreator('test', 3);
const user2 = userCreator('qwe', 4);
user1.increment();

/*
 ****************************************************
 */

// ANOTHER EXAMPLE
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

const myNewfunction = outer();
myNewfunction();
myNewfunction();
