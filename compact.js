// compact _.compact(array) Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
/* _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3] */

export function compact(array) {
  const DEFAULT_RESULT = [];
  if (!Array.isArray(array)) {
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  result.length = array.length;
  let resultLength = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i]) {
      resultLength += 1;
      result[resultLength - 1] = array[i];
    }
  }
  result.length = resultLength;

  return result;
}
