const fetch = require('node-fetch');

const aca = fetch('https://collectednotes.com/sergiodxa.json');
const aca2 = fetch('https://collectednotes.com/rodrigo398.json');

const esto = Promise.all([aca, aca2]);

esto.then(async ([json1, json2]) => {
  const a = await json1.json();
  const b = await json2.json();
  console.log(a);
});
