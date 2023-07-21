import { predicateHandler } from "./utils/predicateHandler";

// omitBy _.omitBy(object, [predicate=_.identity]) The opposite of _.pickBy; this method creates an object composed of the own and inherited enumerable string keyed properties of object that predicate doesn't return truthy for. The predicate is invoked with two arguments: (value, key).
/* var object = { 'a': 1, 'b': '2', 'c': 3 };

_.omitBy(object, _.isNumber);
// => { 'b': '2' } */

export function omitBy(obj, predicate = item => item) {
  const DEFAULT_RESULT = {};
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  try {
    const matchesFunc = predicateHandler(predicate);
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i += 1) {
      if (!matchesFunc(obj[keys[i]])) {
        result[keys[i]] = obj[keys[i]];
      }
    }
    return result;
  }
  catch (Error) {
    return obj;
  }
}