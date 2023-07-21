import { merge } from '../merge';

test('merge without parameters to equal empty object', () => {
  expect(merge()).toStrictEqual({});
});

test('merge NaN instead of object to equal NaN', () => {
  expect(merge(NaN)).toStrictEqual(NaN);
});

test('merge array instead of object to equal the same array', () => {
  expect(merge([1, 2])).toStrictEqual([1, 2]);
});

test('merge number instead of object to equal the same number', () => {
  expect(merge(3)).toStrictEqual(3);
});

test('merge empty object to equal empty object', () => {
  expect(merge({})).toStrictEqual({});
});

test('merge a not empty object to equal the same object', () => {
  expect(merge({a: 1})).toStrictEqual({a: 1});
});

test('merge object to be the same object', () => {
  let obj = { a: 1 };
  expect(merge(obj)).toBe(obj);
});

test('merge 2 objects with the same property to equal object with the same property and merged values', () => {
  var object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };

  var other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };
  expect(merge(object, other)).toStrictEqual({ 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] });
});

test('merge a not empty object with a number to equal the same object', () => {
  expect(merge({a: 1}, 2)).toStrictEqual({a: 1});
});

test('merge a not empty object with the same object to equal the same object', () => {
  expect(merge({a: 1}, {a: 1})).toStrictEqual({a: 1});
});

test('merge 3 objects with the same properties to equal the object with merged property values', () => {
  expect(merge({ a: 1 }, {a: 2, b: 3, c: 4}, {a: 3, b: 2})).toStrictEqual(
    {
      a: 3,
      b: 2,
      c: 4
    }
  );
});

test('merge a not empty object with array of objects to equal object with object added as a numeric property', () => {
  expect(merge({ a: 1 }, [{ a: 2 }])).toStrictEqual(
    {
      0: {
        a: 2
      },
      a: 1
    }
  );
});

test('merge a not empty object with array of objects to equal object with objects added as numeric properties', () => {
  expect(merge({a: 1}, [{a: 2}, {a: 3, c: 4}])).toStrictEqual(
    {
      0: {
        a: 2
      },
      1: {
        a: 3,
        c: 4
      },
      a: 1
    }
  );
});
