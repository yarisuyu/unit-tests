import pickBy from '../pickBy';

test('pickBy without parameters to equal empty object', () => {
    expect(pickBy()).toBeStrictlyEqual({});
});

test('pickBy from empty object to equal empty object', () => {
    expect(pickBy({})).toBeStrictlyEqual({});
});

test('pickBy from NaN instead of object to equal empty object', () => {
    expect(pickBy(NaN)).toBeStrictlyEqual({});
});

test('pickBy from number instead of object to equal empty object', () => {
    expect(pickBy(3)).toBeStrictlyEqual({});
});

test('pickBy from a not empty object with default predicate to equal the same object', () => {
  expect(pickBy({a: 1})).toBeStrictlyEqual({a: 1});
});

test('pickBy from object with -2 instead of predicate to equal the same object', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pickBy(obj, -2)).toBeStrictlyEqual({});
});

test('pickBy from object with isNumber properties to equal object with 1 property', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pickBy(obj, (item) => typeof item === 'number')).toBeStrictlyEqual({ 'a': 1, 'c': 3 });
});
