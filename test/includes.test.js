import includes from '../includes';

test('includes without parameters to be undefined', () => {
  expect(includes()).toBeFalse();
});

test('includes in empty object instead of array to be undefined', () => {
  expect(includes({})).toBeFalse();
});

test('includes in a not empty object instead of array to equal the first property value', () => {
  expect(includes({a: 1})).toBeFalse();
});

test('includes in NaN instead of array to be undefined', () => {
  expect(includes(NaN)).toBeFalse();
});

test('includes in number instead of array to be undefined', () => {
  expect(includes(3)).toBeFalse();
});

test('includes in array with -2 instead of predicate to be undefined', () => {
  expect(includes([1, 2, 3], -2)).toBeFalse();
});

test('includes in a not empty array with default predicate to equal the first element in array', () => {
  expect(includes([1, 2, 3], 1)).toBeTrue();
});

test('includes in empty array with default predicate to be undefined', () => {
  expect(includes([1, 2, 3], 1, 2)).toBeFalse();
});

test('includes in empty array with default predicate to be undefined', () => {
  expect(includes([], 'a')).toBeFalse();
});

test('includes in a not empty array with identity predicate to equal the first element in array', () => {
  expect(includes({ 'a': 1, 'b': 2 }, 1)).toBeTrue();
});

test('includes in a not empty array with identity predicate to equal the first element in array', () => {
  expect(includes({ 'a': 1, 'b': 2 }, 3)).toBeFalse();
});

test('includes in a not empty array with identity predicate to equal the first element in array', () => {
  expect(includes({ 'a': 1, 'b': 2 }, 1, 2)).toBeFalse();
});

test('includes in array with empty object as predicator to equal the first element in array', () => {
  expect(includes('abcd', 'bc')).toBeTrue();
});

test('includes in array with empty object as predicator to equal the first element in array', () => {
  expect(includes('abcd', 'bc', 2)).toBeFalse();
});

test('includes in array with empty object as predicator to equal the first element in array', () => {
  expect(includes('abcd', 'ba')).toBeFalse();
});
