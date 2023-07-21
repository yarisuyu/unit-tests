import { predicateHandler } from "./utils/predicateHandler";

// map _.map(collection, [iteratee=_.identity])
// Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
// (value, index|key, collection).
/*function square(n) {
  return n * n;
}

_.map([4, 8], square);
// => [16, 64]

_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)

var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];

// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred'] */
export function map(array, iteratee = item => item) {
  const DEFAULT_RESULT = [];
  if (!Array.isArray(array)) {
    if (typeof array === 'object') {
      return Object.values(array);
    }
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  let matchesFunc;
  try {
    matchesFunc = predicateHandler(iteratee);
  }
  catch (Error) {
    matchesFunc = item => undefined;
  }

  result.length = array.length;

  for (let i = 0; i < array.length; i += 1) {
    result[i] = matchesFunc(array[i], i, array);
  }

  return result;
}
