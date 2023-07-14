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
  if (!Array.isArray(array)) {
    if (typeof array === 'object') {
      return Object.values(array);
    }
    return [];
  }

  const result = [];
  let matchesFunc;
  switch (typeof predicate) {
    case 'function': {
      matchesFunc = item => predicate(item);
    }
    break;
    case 'object': {
      if (Array.isArray(predicate)) { // `_.matchesProperty` iteratee shorthand.
        if (predicate.length > 2) {
          return [];
        }
        matchesFunc = (item => item[predicate[0]] === predicate[1]);
      } else { // `_.matches` iteratee shorthand.
        matchesFunc = item => {
          const predicateKeys = Object.keys(predicate);
          let matches = true;
          for (let j = 0; j < predicateKeys.length; j += 1) {
            if (item[predicateKeys[j]] !== predicate[predicateKeys[j]]) {
              matches = false;
              break;
            }
          }
          return matches;
        }
      }
    }
    break;
    case 'string': { // `_.property` iteratee shorthand
      matchesFunc = item => item[predicate];
    }
    break;
    default:
      return [];
  }

  for (let i = 0; i < array.length; i += 1) {
    const matches = matchesFunc(array[i]);
    if (matchesFunc(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
}

export default filter;