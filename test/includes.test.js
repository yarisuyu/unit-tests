import { includes } from '../includes';

test('includes without parameters to be falsy', () => {
  expect(includes()).toBeFalsy();
});

test('includes in empty object instead of array without value to be falsy', () => {
  expect(includes({})).toBeFalsy();
});

test('includes in a not empty object instead of array without value to be falsy', () => {
  expect(includes({a: 1})).toBeFalsy();
});

test('includes in NaN instead of array without value to be falsy', () => {
  expect(includes(NaN)).toBeFalsy();
});

test('includes in number instead of array without value to be falsy', () => {
  expect(includes(3)).toBeFalsy();
});

test('includes a value in empty array to be falsy', () => {
  expect(includes([], 'a')).toBeFalsy();
});

test('includes missing value in array to be falsy', () => {
  expect(includes([1, 2, 3], 4)).toBeFalsy();
});

test('includes first element in a not empty array to be truthy', () => {
  expect(includes([1, 2, 3], 1)).toBeTruthy();
});

test('includes first element from index 2 in a not empty array to be falsy', () => {
  expect(includes([1, 2, 3], 1, 2)).toBeFalsy();
});

test('includes last element from index -2 in a not empty array to be truthy', () => {
  expect(includes([1, 2, 3], 3, -2)).toBeTruthy();
});

test('includes first element from index -2 in a not empty array to be falsy', () => {
  expect(includes([1, 2, 3], 1, -2)).toBeFalsy();
});