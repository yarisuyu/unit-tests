import { zip } from '../zip';

test('zip without parameters to equal empty array', () => {
    expect(zip()).toStrictEqual([]);
});

test('zip empty object to equal empty array', () => {
    expect(zip({})).toStrictEqual([]);
});

test('zip NaN instead of array to equal empty array', () => {
    expect(zip(NaN)).toStrictEqual([]);
});

test('zip number instead of array to equal empty array', () => {
    expect(zip(3)).toStrictEqual([]);
});

test('zip a not empty object to equal the same array', () => {
  expect(zip({a: 1})).toStrictEqual([]);
});

test('zip empty array to equal empty array', () => {
    expect(zip([])).toStrictEqual([]);
});

test('zip array to equal array of arrays of single elements', () => {
    expect(zip([1, 2, 3])).toStrictEqual([[1], [2], [3]]);
});

test('zip array of 2 arrays to equal array of arrays of elements of 2 arrays groupped by index', () => {
    expect(zip([1, 2, 3], [1, 2, 3])).toStrictEqual([[1, 1], [2, 2], [3, 3]]);
});

test('zip array of 2 arrays of different lengths to equal array of arrays of elements of 2 arrays or undefined groupped by index', () => {
    expect(zip([1, 2, 3], ['a', 'b'])).toStrictEqual([[1, "a"], [2, "b"], [3, undefined]]);
});

test('zip array of empty array and array of 3 elements to equal array of arrays of undefined and elements from array 2', () => {
    expect(zip([], ['a', 'b', 'c'])).toStrictEqual([[undefined, "a"], [undefined, "b"], [undefined, "c"]]);
});

test('zip array of 3 arrays to equal array of arrays of elements of 3 arrays groupped by index', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toStrictEqual([['a', 1, true], ['b', 2, false]]);
});
