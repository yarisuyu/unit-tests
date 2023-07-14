export const matches = (predicate) => item => {
  const predicateKeys = Object.keys(predicate);
  let matches = true;
  for (let j = 0; j < predicateKeys.length; j += 1) {
    if (item[predicateKeys[j]] !== predicate[predicateKeys[j]]) {
      matches = false;
      break;
    }
  }
  return matches;
};

export const matchesFunction = (predicate) => (item) => predicate(item);

export const matchesProperty = (predicate) => (item => item[predicate[0]] === predicate[1]);

export const property = (predicate) => item => item[predicate];
