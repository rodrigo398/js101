// Example #1
// output:
// *******
// * undefined
// * 20

var variable = 10;
(() => {
  console.log(variable);
  var variable = 20;
  console.log(variable);
})();

//********************************************* */

// Example #2
// output:
// *******
// * cannot access 'variable' before initialization

/* var variable = 10;
(() => {
  console.log(variable);
  let variable = 20;
  console.log(variable);
})(); */

//********************************************* */

// Example #3
// output:
// *******
// * 10
// * 20

/* var variable = 10;
(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})(); */

//********************************************* */

// Example #4
// output:
// *******
// * 10
// * 20

var variable = 10;
(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})();

//********************************************* */

// Example #5
// output:
// *******
// * variable is not defined

(() => {
  var variable = 10;
  some_var = 300;
})();

(() => {
  console.log(variable); //comment this line
  console.log('some', some_var);
  variable = 20;
  console.log(variable);
  console.log('some', some_var);
})();

//********************************************* */

// Example #6
// output:
// *******
// * 10
// * 20
// * 30

var variable = 10;

(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})();
var variable = 30;
console.log(variable);

//********************************************* */

// Example #7
// output:
// *******
// * 10
// * 20
// * 20

var variable = 10;

(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})();
console.log(variable);
var variable = 30;

//********************************************* */

// Example #8
// output:
// *******
// * undefined
// * 20
// * 10

var variable = 10;

(() => {
  console.log(variable);
  var variable = 20;
  console.log(variable);
})();
console.log(variable);
var variable = 30;

//********************************************* */

// Example #9
// output:
// *******
// * undefined
// * 20
// * 10

var variable = 10;

(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})();
console.log(variable);
