import { map } from '../map';

test('map without parameters to equal empty array', () => {
  expect(map()).toStrictEqual([]);
});

test('map empty object instead of array to equal empty array', () => {
  expect(map({})).toStrictEqual([]);
});

test('map a not empty object instead of array to equal the first property value', () => {
  expect(map({a: 1})).toStrictEqual([1]);
});

test('map NaN instead of array to equal empty array', () => {
  expect(map(NaN)).toStrictEqual([]);
});

test('map number instead of array to equal empty array', () => {
  expect(map(3)).toStrictEqual([]);
});

test('map array with -2 instead of predicate to equal array of undefined values', () => {
  expect(map([1, 2, 3], -2)).toStrictEqual([undefined, undefined, undefined]);
});

test('map a not empty array with default predicate to equal the same array', () => {
  const arr = [1, 2, 3];
  expect(map(arr)).toStrictEqual(arr);
});


function square(n) {
  return n * n;
}

test('map array with square as predicator to equal the array of squared numbers', () => {
  expect(map([4, 8], square)).toStrictEqual([16, 64]);
});


test('map array of users with property as predicator to equal the array of property values', () => {
  var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
  ];
  expect(map(users, 'user')).toStrictEqual(['barney', 'fred']);
});


const print = (value, index, collection) => `${value} ${index} ${collection.length}`;

test('map array with print as predicator to equal the array of printed items', () => {
  expect(map(['a', 'b', 'c'], print)).toStrictEqual(["a 0 3", "b 1 3", "c 2 3"]);
});
