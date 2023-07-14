import { pick } from '../pick';

test('pick without parameters to equal empty object', () => {
    expect(pick()).toStrictEqual({});
});

test('pick from empty object to equal empty object', () => {
    expect(pick({})).toStrictEqual({});
});

test('pick from NaN instead of object to equal empty object', () => {
    expect(pick(NaN)).toStrictEqual({});
});

test('pick from number instead of object to equal empty object', () => {
    expect(pick(3)).toStrictEqual({});
});

test('pick default paths from a not empty object to equal empty object', () => {
  expect(pick({a: 1})).toStrictEqual({});
});

test('pick -2 instead of paths from object to equal empty object', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(obj, -2)).toStrictEqual({});
});

test('pick property a from object to equal object with property a', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(obj, 'a')).toStrictEqual({ 'a': 1 });
});

test('pick 2 properties from object to equal object with 2 properties', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(pick(obj, ['a', 'c'])).toStrictEqual({ 'a': 1, 'c': 3 });
});

test('pick property d from object with object value with property d to equal empty object', () => {
    var obj = { 'a': 1, 'b': {'d': 'e'}, 'c': 3 };
    expect(pick(obj, ['d'])).toStrictEqual({});
});
