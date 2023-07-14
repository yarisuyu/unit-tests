import { drop } from '../drop';

test('drop without parameters to equal empty array', () => {
  expect(drop()).toStrictEqual([]);
});

test('drop from empty object to equal empty array', () => {
  expect(drop({})).toStrictEqual([]);
});

test('drop from not empty object to equal empty array', () => {
  expect(drop({a: 1})).toStrictEqual([]);
});

test('drop from NaN to equal empty array', () => {
  expect(drop(NaN)).toStrictEqual([]);
});

test('drop from number to equal empty array', () => {
  expect(drop(3)).toStrictEqual([]);
});

test('drop from empty array to equal empty array', () => {
  expect(drop([])).toStrictEqual([]);
});

test('drop 5 elements from empty array to equal empty array', () => {
  expect(drop([], 5)).toStrictEqual([]);
});

test('drop from array default number of elements to equal array without the first element', () => {
  expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
});

test('drop 2 elements from array of 3 elements to equal array of the last element', () => {
  expect(drop([1, 2, 3], 2)).toStrictEqual([3]);
});

test('drop 5 elements from array of 3 elements to equal empty array', () => {
  expect(drop([1, 2, 3], 5)).toStrictEqual([]);
});

test('drop 0 elements from array of 3 elements to equal the same array', () => {
  expect(drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3]);
});

test('drop -1 elements from array of 3 elements to equal the same array', () => {
  expect(drop([1, 2, 3], -1)).toStrictEqual([1, 2, 3]);
});
