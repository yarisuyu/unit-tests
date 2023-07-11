import compact from '../compact';

test('compact without parameters to equal empty array', () => {
  expect(compact()).toBe([]);
});

test('compact empty object to equal empty array', () => {
  expect(compact({})).toBe([]);
});

test('compact not empty object to equal empty array', () => {
  expect(compact({a: 1})).toBe([]);
});

test('compact NaN to equal empty array', () => {
  expect(compact(NaN)).toBe([]);
});

test('compact number to equal empty array', () => {
  expect(compact(3)).toBe([]);
});

test('compact empty array to equal empty array', () => {
  expect(compact([])).toBe([]);
});

test('compact array of falsy values to equal empty array', () => {
  expect(compact([null, undefined, false, NaN, 0, -0, 0n, '', document.all])).toBe([]);
});

test('compact array of values often mixed with falsy values to equal the same array', () => {
    const arr = ["0", true, 1, ' ', , {}, [], "false", -1, new Date(), Infinity, -Infinity];
    expect(compact(arr)).toEqual(arr);
});
