// chunk _.chunk(array, [size=1]) Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
/* _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']] */

export function chunk(array, size = 1) {
    const DEFAULT_RESULT = [];
    if (!Array.isArray(array) || size < 0) {
    return DEFAULT_RESULT;
    }

    const result = DEFAULT_RESULT;
    let i = 0;
    while (i < array.length) {
        let j = 0;
        const chunk = [];
        while (j < size && i + j < array.length) {
            chunk.push(array[i + j]);
            j += 1;
        }
        result.push(chunk);
        i += size;
    }

    return result;
}
