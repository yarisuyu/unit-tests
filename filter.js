import { predicateHandler } from './utils/predicateHandler';

// filter _.filter(collection, [predicate=_.identity])
// Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
// Note: This method returns a new array.

// _.filter(users, function(o) { return !o.active; });
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
// _.filter(users, { 'age': 36, 'active': true });
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
// _.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
// _.filter(users, 'active');
// => objects for ['barney'] */

export function filter(array, predicate = item => item) {
  const DEFAULT_RESULT = [];
  if (!Array.isArray(array)) {
    if (typeof array === 'object') {
      return Object.values(array);
    }
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  try {
    const matchesFunc = predicateHandler(predicate);

    result.length = array.length;
    let resultLength = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (matchesFunc(array[i])) {
        resultLength += 1;
        result[resultLength - 1] = array[i];
      }
    }
    result.length = resultLength;
  }
  catch {
    return DEFAULT_RESULT;
  }

  return result;
}