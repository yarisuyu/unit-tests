import { predicateHandler } from "./utils/predicateHandler";

// dropWhile _.dropWhile(array, [predicate=_.identity]) Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
/* var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']

// The `_.matches` iteratee shorthand.
_.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
_.dropWhile(users, ['active', false]);
// => objects for ['pebbles']

// The `_.property` iteratee shorthand.
_.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles'] */

export function dropWhile(array, predicate = item => item) {
  const DEFAULT_RESULT = [];
  if (!Array.isArray(array)) {
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  try {
    const matchesFunc = predicateHandler(predicate);

    let i = 0;
    while (i < array.length) {
      if (matchesFunc(array[i])) {
        i += 1;
      }
      else {
        break;
      }
    }

    for (let j = i; j < array.length; j += 1) {
      result.push(array[j]);
    }

    return result;
  }
  catch (Error) {
    return array;
  }
}
