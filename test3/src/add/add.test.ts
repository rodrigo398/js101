const add = require('./add');

describe('New test', () => {
  test('adding two values', () => {
    expect(add(2, 3)).toEqual(5);
  });
});

export {};
