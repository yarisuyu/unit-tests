import toPairs from '../toPairs';

test('toPairs without parameters to equal empty array', () => {
    expect(toPairs()).toBeStrictlyEqual([]);
});

test('toPairs from empty object to equal empty array', () => {
    expect(toPairs({})).toBeStrictlyEqual([]);
});

test('toPairs from NaN instead of object to equal empty array', () => {
    expect(toPairs(NaN)).toBeStrictlyEqual([]);
});

test('toPairs from number instead of object to equal empty array', () => {
    expect(toPairs(3)).toBeStrictlyEqual([]);
});

test('toPairs from object with one property to equal array of the pair of property and value', () => {
  expect(toPairs({a: 1})).toBeStrictlyEqual([['a', 1]]);
});

test('toPairs from object with multiple properties to equal array of the property and value pairs', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(toPairs(obj)).toBeStrictlyEqual([['a', 1], ['b', '2'], ['c', 3]]);
});

test('toPairs from array to equal array of index and element pairs', () => {
  var users = [1, 2, 3];
  expect(toPairs(users)).toBeStrictlyEqual([['0', 1], ['1', 2], ['2', 3]]);
});

function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;

test('toPairs from object created by a prototyped function to equal array of property and value pairs not from prototype', () => {
    expect(toPairs(new Foo)).toBeStrictlyEqual([['a', 1], ['b', 2]]);
});

test('toPairs from Map to equal array of Map key and value pairs', () => {
  const map = new Map();
  map1.set('a', 1);
  map1.set('b', 2);
  map1.set('c', 3);
  expect(toPairs(map)).toBeStrictlyEqual([['a', 1], ['b', 2], ['c', 3]]);
});

test('toPairs from Set to equal array of unique value and value pairs', () => {
  const set = new Set();
  set.add(1);
  set.add(5);
  set.add(5);
  expect(toPairs(set)).toBeStrictlyEqual([[1, 1], [5, 5]]);
});
