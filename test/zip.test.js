import zip from '../zip';

test('zip without parameters to equal empty array', () => {
    expect(zip()).toBeStrictlyEqual([]);
});

test('zip from empty object to equal empty array', () => {
    expect(zip({})).toBeStrictlyEqual([]);
});

test('zip from NaN instead of array to equal empty array', () => {
    expect(zip(NaN)).toBeStrictlyEqual([]);
});

test('zip from number instead of array to equal empty array', () => {
    expect(zip(3)).toBeStrictlyEqual([]);
});

test('zip from a not empty object with default predicate to equal the same array', () => {
  expect(zip({a: 1})).toBeStrictlyEqual([]);
});

test('zip from empty array to equal empty array', () => {
    expect(zip([])).toBeStrictlyEqual([]);
});

test('zip from array with -2 instead of predicate to equal the same array', () => {
    expect(zip([1, 2, 3])).toBeStrictlyEqual([[1], [2], [3]]);
});

test('zip from array with -2 instead of predicate to equal the same array', () => {
    expect(zip([1, 2, 3], [1, 2, 3])).toBeStrictlyEqual([[1, 1], [2, 2], [3, 3]]);
});

test('zip from array with -2 instead of predicate to equal the same array', () => {
    expect(zip([1, 2, 3], ['a', 'b'])).toBeStrictlyEqual([[[1, "a"], [2, "b"], [3, undefined]]]);
});

test('zip from array with -2 instead of predicate to equal the same array', () => {
    expect(zip([], ['a', 'b', 'c'])).toBeStrictlyEqual([[undefined, "a"], [undefined, "b"], [undefined, "c"]]);
});

test('zip from array with -2 instead of predicate to equal the same array', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toBeStrictlyEqual([['a', 1, true], ['b', 2, false]]);
});
