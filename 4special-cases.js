for (let index = 0; index < 10; index++) {
  console.log(index);
}
console.log(index);

function printAge(age) {
  console.log('Hi ', age);
  function printName() {
    console.log(age);
  }
  printName();
}

printAge('29');
//console.log(age);
