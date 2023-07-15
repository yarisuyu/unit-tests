import { toPairs } from '../toPairs';

test('toPairs without parameters to equal empty array', () => {
    expect(toPairs()).toStrictEqual([]);
});

test('toPairs from empty object to equal empty array', () => {
    expect(toPairs({})).toStrictEqual([]);
});

test('toPairs from NaN instead of object to equal empty array', () => {
    expect(toPairs(NaN)).toStrictEqual([]);
});

test('toPairs from number instead of object to equal empty array', () => {
    expect(toPairs(3)).toStrictEqual([]);
});

test('toPairs from object with one property to equal array of the pair of property and value', () => {
  expect(toPairs({a: 1})).toStrictEqual([['a', 1]]);
});

test('toPairs from object with multiple properties to equal array of the property and value pairs', () => {
    var obj = { 'a': 1, 'b': '2', 'c': 3 };
    expect(toPairs(obj)).toStrictEqual([['a', 1], ['b', '2'], ['c', 3]]);
});

test('toPairs from array to equal array of index and element pairs', () => {
  var users = [1, 2, 3];
  expect(toPairs(users)).toStrictEqual([['0', 1], ['1', 2], ['2', 3]]);
});

function Foo() {
  this.a = 1;
  this.b = 2;
}
Foo.prototype.c = 3;

test('toPairs from object created by a prototyped function to equal array of property and value pairs not from prototype', () => {
    expect(toPairs(new Foo)).toStrictEqual([['a', 1], ['b', 2]]);
});
