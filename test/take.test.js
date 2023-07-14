import { take } from '../take';

test('take without parameters to equal empty array', () => {
    expect(take()).toStrictEqual([]);
});

test('take from empty object to equal empty array', () => {
    expect(take({})).toStrictEqual([]);
});

test('take from NaN instead of array to equal empty array', () => {
    expect(take(NaN)).toStrictEqual([]);
});

test('take from number instead of array to equal empty array', () => {
    expect(take(3)).toStrictEqual([]);
});

test('take from a not empty object with default predicate to equal the same array', () => {
  expect(take({a: 1})).toStrictEqual([]);
});

test('take from empty array to equal empty array', () => {
    expect(take([])).toStrictEqual([]);
});

test('take from empty array to equal empty array', () => {
    expect(take([], -2)).toStrictEqual([]);
});

test('take from empty array to equal empty array', () => {
    expect(take([], 3)).toStrictEqual([]);
});

test('take from array with -2 instead of predicate to equal the same array', () => {
    var arr = [1, 2, 3];
    expect(take(arr, -2)).toStrictEqual([]);
});

test('take from array with -2 instead of predicate to equal the same array', () => {
    var arr = [1, 2, 3];
    expect(take(arr)).toStrictEqual([1]);
});

test('take from array with -2 instead of predicate to equal the same array', () => {
    var arr = [1, 2, 3];
    expect(take(arr, 0)).toStrictEqual([]);
});

test('take from array with -2 instead of predicate to equal the same array', () => {
    var arr = [1, 2, 3];
    expect(take(arr, 2)).toStrictEqual([1, 2]);
});

test('take from array with -2 instead of predicate to equal the same array', () => {
    var arr = [1, 2, 3];
    expect(take(arr, 5)).toStrictEqual([1, 2, 3]);
});
