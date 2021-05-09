function userCreator(name, score) {
  const newUser = Object.create();
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log('Logged in');
  },
};
