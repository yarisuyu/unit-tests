import dropWhile from '../dropWhile';

test('dropWhile without parameters to equal empty array', () => {
  expect(dropWhile()).toStrictEqual([]);
});

test('dropWhile from empty object instead of array to equal empty array', () => {
  expect(dropWhile({})).toStrictEqual([]);
});

test('dropWhile from not empty object instead of array to equal empty array', () => {
  expect(dropWhile({a: 1})).toStrictEqual([]);
});

test('dropWhile from NaN instead of array to equal empty array', () => {
  expect(dropWhile(NaN)).toStrictEqual([]);
});

test('dropWhile from number instead of array to equal empty array', () => {
  expect(dropWhile(3)).toStrictEqual([]);
});

test('dropWhile from array with -2 instead of predicate to equal the same array', () => {
  const arr = ['a', 'b', 'c'];
  expect(dropWhile(arr, -2)).toEqual(arr);
});

test('dropWhile from empty array with default predicate to equal empty array', () => {
  expect(dropWhile([])).toStrictEqual([]);
});

test('dropWhile from array with identity predicate to equal empty array', () => {
  expect(dropWhile(['a', 'b', 'c'], item => item)).toStrictEqual([]);
});

test('dropWhile from array with empty object as predicator to equal empty array', () => {
  expect(dropWhile(['a', 'b', 'c'], {})).toStrictEqual([]);
});

test('dropWhile from array with a functional isActive predicate by to equal the active element', () => {
  var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  expect(dropWhile(users, function (o) { return !o.active; }).toStrictEqual(
    [
      {
        active: true,
        user: "pebbles"
      }
    ]
  ));
});

test('dropWhile from array with a "matches" predicate by to equal the matching element', () => {
  // The `_.matches` iteratee shorthand.
  var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  expect(dropWhile(users, { 'user': 'barney', 'active': false }).toStrictEqual([
    {
      active: false,
      user: "fred"
    }, {
      active: true,
      user: "pebbles"
    }
  ]));
});

test('dropWhile from array with a "matchesProperty" predicate by to equal the matching element', () => {
  // The `_.matchesProperty` iteratee shorthand.
  var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  expect(dropWhile(users, ['active', false]).toStrictEqual(
    [
      {
        active: true,
        user: "pebbles"
      }
    ]
  ));
});

test('dropWhile from array with a "property" predicate by to equal the matching elements', () => {
  // The `_.property` iteratee shorthand.
  var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
  expect(dropWhile(users, 'active').toStrictEqual(users));
});
