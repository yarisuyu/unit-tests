import { chunk } from '../chunk';

test('chunk without parameters to equal empty array', () => {
  expect(chunk()).toStrictEqual([]);
});

test('chunk empty object to equal empty array', () => {
  expect(chunk({})).toStrictEqual([]);
});

test('chunk not empty object to equal empty array', () => {
  expect(chunk({a: 1})).toStrictEqual([]);
});

test('chunk NaN to equal empty array', () => {
  expect(chunk(NaN)).toStrictEqual([]);
});

test('chunk number to equal empty array', () => {
  expect(chunk(3)).toStrictEqual([]);
});

test('chunk array with size -2 to equal empty array', () => {
  expect(chunk(['a', 'b', 'c'], -2)).toStrictEqual([]);
});

test('chunk empty array with default size to equal empty array', () => {
  expect(chunk([])).toStrictEqual([]);
});

test('chunk empty array with size 2 to equal empty array', () => {
  expect(chunk([], 2)).toStrictEqual([]);
});

test('chunk array with default size to equal the array of arrays of single elements', () => {
  expect(chunk(['a', 'b', 'c'])).toStrictEqual([['a'], ['b'], ['c']]);
});

test('chunk array of length 3 with size 3 to equal the array of array of all elements', () => {
  expect(chunk(['a', 'b', 'c'], 3)).toStrictEqual([['a', 'b', 'c']]);
});

test('chunk array of length 3 with size 2 to equal the array of 2 arrays of max length 2', () => {
  expect(chunk(['a', 'b', 'c'], 2)).toStrictEqual([['a', 'b'], ['c']]);
});

test('chunk array of length 3 with size 5 to equal the array of array of all 3 elements', () => {
  expect(chunk(['a', 'b', 'c'], 5)).toStrictEqual([['a', 'b', 'c']]);
});

test('chunk array of length 6 with size 2 to equal the array of 3 arrays of length 2', () => {
  expect(chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2)).toStrictEqual([['a', 'b'], ['c', 'd'], ['e', 'f']]);
});
