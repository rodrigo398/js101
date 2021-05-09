function prom1(val1) {
  return new Promise(resolve => {
    resolve(val1 * 3);
  });
}

async function esto() {
  const aca = await prom1(23);
  return aca;
}

prom1(4).then(res => console.log(res));
