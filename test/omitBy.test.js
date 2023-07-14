import { omitBy } from '../omitBy';

test('omitBy without parameters to equal empty object', () => {
    expect(omitBy()).toStrictEqual({});
});

test('omitBy from empty object to equal empty object', () => {
    expect(omitBy({})).toStrictEqual({});
});

test('omitBy from NaN instead of object to equal empty object', () => {
    expect(omitBy(NaN)).toStrictEqual({});
});

test('omitBy from number instead of object to equal empty object', () => {
    expect(omitBy(3)).toStrictEqual({});
});

test('omitBy from a not empty object with default predicate to equal the same object', () => {
  expect(omitBy({a: 1})).toStrictEqual({});
});

test('omitBy from object with -2 instead of predicate to equal the same object', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omitBy(obj, -2)).toStrictEqual(obj);
});

test('omitBy from object with isNumber properties to equal object with 1 property', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omitBy(obj, (item) => typeof item === 'number')).toStrictEqual({ 'b': '2' });
});