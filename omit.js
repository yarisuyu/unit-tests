// omit _.omit(object, [paths]) The opposite of _.pick; this method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
// Note: This method is considerably slower than _.pick.
/* var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omit(object, ['a', 'c']);
// => { 'b': '2' } */

export function omit(obj, paths = []) {
  const DEFAULT_RESULT = {};
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  const keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i += 1) {
    let found = false;
    for (let j = 0; j < paths.length; j += 1) {
      if (keys[i] === paths[j]) {
        found = true;
      }
    }
    if (found) {
      continue;
    }
    result[keys[i]] = obj[keys[i]];
  }

  return result;
}
