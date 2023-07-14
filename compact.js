// compact _.compact(array) Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
/* _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3] */

export function compact(array) {
  const DEFAULT_RESULT = [];
  if (!Array.isArray(array)) {
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i]) {
      result.push(array[i]);
    }
  }

  return result;
}
