// take _.take(array, [n=1]) Creates a slice of array with n elements taken from the beginning.
/*_.take([1, 2, 3]);
// => [1]

_.take([1, 2, 3], 2);
// => [1, 2]

_.take([1, 2, 3], 5);
// => [1, 2, 3]

_.take([1, 2, 3], 0);
// => [] */
export function take(array, n = 1) {
  const DEFAULT_RESULT = [];
  if (!Array.isArray(array)) {
    return DEFAULT_RESULT;
  }

  if (n < 0) {
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  for (let i = 0; i < array.length && i < n; i += 1) {
    result.push(array[i]);
  }

  return result;

}
