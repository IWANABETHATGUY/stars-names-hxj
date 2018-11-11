const { unique } = require('../index');

const allIsNumber = arr => arr.every(item => typeof item === 'number');

test('unique function test', () => {
  expect(unique([1, 3, 3, 4, 5])).toEqual([1, 3, 4, 5]);
});

test('unique', () => {
  expect(allIsNumber(unique([1]))).toBeTruthy();
});
