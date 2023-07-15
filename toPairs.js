// toPairs _.toPairs(object) Creates an array of own enumerable string keyed-value pairs for object which can be consumed by _.fromPairs. If object is a map or set, its entries are returned.

/* function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;

_.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed) */
export function toPairs(obj) {
  const DEFAULT_RESULT = [];
  if (typeof obj !== 'object') {
    return DEFAULT_RESULT;
  }

  const result = [];
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i += 1) {
    result.push([keys[i], obj[keys[i]]]);
  }
  return result;
}