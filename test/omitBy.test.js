import omitBy from '../omitBy';

test('omitBy without parameters to equal empty object', () => {
    expect(omitBy()).toBeStrictlyEqual({});
});

test('omitBy from empty object to equal empty object', () => {
    expect(omitBy({})).toBeStrictlyEqual({});
});

test('omitBy from NaN instead of object to equal empty object', () => {
    expect(omitBy(NaN)).toBeStrictlyEqual({});
});

test('omitBy from number instead of object to equal empty object', () => {
    expect(omitBy(3)).toBeStrictlyEqual({});
});

test('omitBy from a not empty object with default predicate to equal the same object', () => {
  expect(omitBy({a: 1})).toBeStrictlyEqual({});
});

test('omitBy from object with -2 instead of predicate to equal the same object', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omitBy(obj, -2)).toBeStrictlyEqual(obj);
});

test('omitBy from object with isNumber properties to equal object with 1 property', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omitBy(obj, (item) => typeof item === 'number')).toBeStrictlyEqual({ 'b': '2' });
});