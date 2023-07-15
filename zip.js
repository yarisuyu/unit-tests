// zip _.zip([arrays]) Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on.
// _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

export function zip(...arrays) {
  const DEFAULT_RESULT = [];
  if (!Array.isArray(arrays)) {
    return DEFAULT_RESULT;
  }

  let maxArrayLength = 0;
  for (let i = 0; i < arrays.length; i += 1) {
    if (arrays[i].length > maxArrayLength) {
      maxArrayLength = arrays[i].length;
    }
  }

  const result = [];
  result.length = maxArrayLength;
  for (let i = 0; i < maxArrayLength; i += 1) {
    const zipped = [];
    zipped.length = arrays.length;
    for (let j = 0; j < arrays.length; j += 1) {
      zipped[j] = arrays[j][i];
    }
    result[i] = zipped;
  }

  return result;
}
