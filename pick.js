// pick _.pick(object, [paths]) Creates an object composed of the picked object properties.
/* var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 } */

export function pick(obj, paths = []) {
  const DEFAULT_RESULT = {};
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  for (let i = 0; i < paths.length; i += 1) {
    if (!Object.hasOwn(obj, paths[i])) {
      continue;
    }
    result[paths[i]] = obj[paths[i]];
  }

  return result;
}
