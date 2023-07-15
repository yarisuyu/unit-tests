// includes _.includes(array, value, [fromIndex=0])
// Checks if value is in array. If fromIndex is negative, it's used as the offset from the end of array.
/* _.includes([1, 2, 3], 1);
// => true

_.includes([1, 2, 3], 1, 2);
// => false

_.includes({ 'a': 1, 'b': 2 }, 1);
// => true

_.includes('abcd', 'bc');
// => true */

export function includes(array, value, fromIndex = 0) {
  const DEFAULT_RESULT = false;
  console.log(array);
  if (!Array.isArray(array)) {
    return DEFAULT_RESULT;
  }

  if (fromIndex < 0) {
    fromIndex = array.length + fromIndex;
  }

  for (let i = fromIndex; i < array.length; i += 1) {
    if (array[i] === value) {
      return true;
    }
  }

  return DEFAULT_RESULT;
}
