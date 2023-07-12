import omit from '../omit';

test('omit without parameters to equal empty object', () => {
    expect(omit()).toBeStrictlyEqual({});
});

test('omit from empty object to equal empty object', () => {
    expect(omit({})).toBeStrictlyEqual({});
});

test('omit from a not empty object to equal the same object', () => {
  expect(omit({a: 1})).toBeStrictlyEqual({a: 1});
});

test('omit from NaN instead of object to equal empty object', () => {
    expect(omit(NaN)).toBeStrictlyEqual({});
});

test('omit from number instead of object to equal empty object', () => {
    expect(omit(3)).toBeStrictlyEqual({});
});

test('omit from object with -2 instead of paths to equal the same object', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(obj, -2)).toBeStrictlyEqual(obj);
});

test('omit array of 2 properties from object with 3 properties to equal object with 1 property', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(obj, ['a', 'c'])).toBeStrictlyEqual({ 'b': '2' });
});

test('omit array of all properties from a not empty object to equal empty object', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(obj, ['a', 'b', 'c'])).toBeStrictlyEqual({});
});

test('omit single property from object to equal the same object without omitted property', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(omit(obj, 'c')).toBeStrictlyEqual({ 'a': 1, 'b': '2' });
});

test('omit missing property from object to equal the same object', () => {
    var obj = { 'a': 1, 'b': { 'd': 4 }, 'c': 3 };
    expect(omit(obj, 'd')).toBeStrictlyEqual(obj);
});
