import { predicateHandler } from "./utils/predicateHandler";

// find _.find(collection, [predicate=_.identity], [fromIndex=0])
// Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
/* var users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

_.find(users, function(o) { return o.age < 40; });
// => object for 'barney'

// The `_.matches` iteratee shorthand.
_.find(users, { 'age': 1, 'active': true });
// => object for 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
_.find(users, ['active', false]);
// => object for 'fred'

// The `_.property` iteratee shorthand.
_.find(users, 'active');
// => object for 'barney' */

export function find(array, predicate = item => item) {
  const DEFAULT_RESULT = undefined;
  if (!Array.isArray(array)) {
    if (typeof array === 'object') {
      return Object.values(array).at(0);
    }
    return DEFAULT_RESULT;
  }

  try {
    const matchesFunc = predicateHandler(predicate);

    for (let i = 0; i < array.length; i += 1) {
      if (matchesFunc(array[i])) {
        return array[i];
      }
    }
  }
  catch {
    return DEFAULT_RESULT;
  }

  return DEFAULT_RESULT;
}
