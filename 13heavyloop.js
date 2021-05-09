// HEAVY - output: Done in 2641ms
/* let i = 0;

let start = Date.now();

function count() {
  // do a heavy job
  for (let j = 0; j < 1e9; j++) {
    i++;
  }

  console.log('Done in ' + (Date.now() - start) + 'ms');
}

count(); */

// Using setTimeout - output: Done in 4410ms

/* let i = 0;

let start = Date.now();

function count() {
  // do a piece of the heavy job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    console.log('Done in ' + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // schedule the new call (**)
  }
}

count(); */

// using setTimeout again - output: Done in 4388ms

let i = 0;

let start = Date.now();

function count() {
  // move the scheduling to the beginning
  if (i < 1e9 - 1e6) {
    setTimeout(count); // schedule the new call
  }

  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    console.log('Done in ' + (Date.now() - start) + 'ms');
  }
}

count();

// https://javascript.info/event-loop
