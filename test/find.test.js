import find from '../find';

test('find without parameters to be undefined', () => {
  expect(find()).toBeUndefined();
});

test('find in empty object instead of array to be undefined', () => {
  expect(find({})).toBeUndefined();
});

test('find in a not empty object instead of array to equal the first property value', () => {
  expect(find({a: 1})).toStrictEqual(1);
});

test('find in NaN instead of array to be undefined', () => {
  expect(find(NaN)).toBeUndefined();
});

test('find in number instead of array to be undefined', () => {
  expect(find(3)).toBeUndefined();
});

test('find in array with -2 instead of predicate to be undefined', () => {
  const arr = ['a', 'b', 'c'];
  expect(find(arr, -2)).toBeUndefined();
});

test('find in a not empty array with default predicate to equal the first element in array', () => {
  const arr = ['a', 'b', 'c'];
  expect(find(arr)).toBe('a');
});

test('find in empty array with default predicate to be undefined', () => {
  expect(find([])).toBeUndefined();
});

test('find in a not empty array with identity predicate to equal the first element in array', () => {
  const arr = ['a', 'b', 'c'];
  expect(find(arr, item => item)).toBe('a');
});

test('find in array with empty object as predicator to equal the first element in array', () => {
  const arr = ['a', 'b', 'c'];
  expect(find(arr, {})).toBe('a');
});

test('find in array with a function as predicator to equal the first matching element in the array', () => {
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  expect(find(users, function(o) { return o.age < 40; })).toStrictEqual({ 'user': 'barney',  'age': 36, 'active': true });
});

test('find in array with matches predicator to equal the first matching element in the array', () => {
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  expect(find(users, { 'age': 1, 'active': true })).toStrictEqual({ 'user': 'pebbles', 'age': 1,  'active': true });
});

test('find array with matchesProperty predicator to equal the first matching element in the array', () => {
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  expect(find(users, ['active', false])).toStrictEqual({ 'user': 'fred', 'age': 40, 'active': false });
});

test('find array with property predicator to equal  the first matching element in the array', () => {
  var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ];
  expect(find(users, 'active')).toStrictEqual({ 'user': 'barney',  'age': 36, 'active': true });
});
