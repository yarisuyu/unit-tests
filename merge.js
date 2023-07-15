// merge _.merge(object, [sources])
/*This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
// Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively.
// Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.
Note: This method mutates object.*/
/* var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

_.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }*/

function mergeArray(array, source) {
  const DEFAULT_RESULT = array;
  if (typeof array !== 'object' || !Array.isArray(array)) {
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  for (let i = 0; i < result.length; i += 1) {
    result[i] = mergeBase(result[i], source[i]);
  }
  return result;
}

function mergeBase(value, otherValue) {
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      const result = mergeArray(value, otherValue);
      return result;
    } else {
      const result = value;
      const keys = Object.keys(otherValue);
      for (let j = 0; j < keys.length; j += 1) {
        result[keys[j]] = otherValue[keys[j]];
      }
      return result;
    }
  } else {
    let result = value;
    result = otherValue;

    return result;
  }
}

export function merge(obj, ...sources) {
  const DEFAULT_RESULT = (typeof obj !== 'undefined') ? obj : {};
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  for (let i = 0; i < sources.length; i += 1) {
    const keys = Object.keys(sources[i]);
    for (let j = 0; j < keys.length; j += 1) {
      const merged = mergeBase(result[keys[j]], sources[i][keys[j]]);
      result[keys[j]] = merged;
    }
  }

  return result;
}
