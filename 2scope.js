let x = 'red';

{
  let x = 'green';
  console.log(x);

  (function () {
    console.log('color:', x);
    var x = 'blue';
  })();
}

console.log('1: ', x);
