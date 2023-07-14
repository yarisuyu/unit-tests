// drop _.drop(array, [n=1])  Creates a slice of array with n elements dropped from the beginning.
/* _.drop([1, 2, 3]);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3] */
export function drop(array, n = 1) {
  const DEFAULT_RESULT = [];
  if (!Array.isArray(array)) {
    return DEFAULT_RESULT;
  }

  if (n < 0) {
    return array;
  }

  const result = DEFAULT_RESULT;
  for (let i = n; i < array.length; i += 1) {
    result.push(array[i]);
  }

  return result;
}
