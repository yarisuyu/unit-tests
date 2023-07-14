import filter from '../filter';

test('filter without parameters to equal empty array', () => {
  expect(filter()).toStrictEqual([]);
});

test('filter empty object instead of array to equal empty array', () => {
  expect(filter({})).toStrictEqual([]);
});

test('filter not empty object instead of array to equal empty array', () => {
  expect(filter({a: 1})).toStrictEqual([1]);
});

test('filter NaN instead of array to equal empty array', () => {
  expect(filter(NaN)).toStrictEqual([]);
});

test('filter number instead of array to equal empty array', () => {
  expect(filter(3)).toStrictEqual([]);
});

test('filter array with -2 instead of predicate to equal empty array', () => {
  const arr = ['a', 'b', 'c'];
  expect(filter(arr, -2)).toEqual([]);
  expect(arr).not.toEqual(filter(arr, -2));
});

test('filter empty array with default predicate to equal the same array', () => {
  const arr = ['a', 'b', 'c'];
  expect(filter(arr)).toStrictEqual(arr);
  expect(filter(arr)).not.toBe(arr);
});

test('filter empty array with default predicate to equal empty array', () => {
  expect(filter([])).toStrictEqual([]);
});

test('filter array with identity predicate to equal the same array', () => {
  const arr = ['a', 'b', 'c'];
  expect(filter(arr, item => item)).toStrictEqual(arr);
  expect(filter(arr)).not.toBe(arr);
});

test('filter array with empty object as predicator to equal the same array', () => {
  const arr = ['a', 'b', 'c'];
  expect(filter(arr, {})).toStrictEqual(arr);
  expect(filter(arr)).not.toBe(arr);
});

test('filter array with notActive function as predicator to array with matching items', () => {
  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
  expect(filter(users, function (o) { return !o.active; }))
    .toStrictEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
  expect(filter(users, function (o) { return !o.active; })).not.toEqual(users);
});

test('filter array with matches predicator to equal array with matching items', () => {
  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
  expect(filter(users, { 'age': 36, 'active': true }))
    .toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
  expect(filter(users, { 'age': 36, 'active': true })).not.toBe(users);
});

test('filter array with matchesProperty predicator to equal array with matching items', () => {
  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
  expect(filter(users, ['active', false]))
    .toStrictEqual([{ 'user': 'fred', 'age': 40, 'active': false }]);
  expect(filter(users, ['active', false])).not.toEqual(users);
});

test('filter array with property predicator to equal array with matching items', () => {
  var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
  expect(filter(users, 'active'))
    .toStrictEqual([{ 'user': 'barney', 'age': 36, 'active': true }]);
  expect(filter(users, 'active')).not.toEqual(users);
});
