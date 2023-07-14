import { predicateHandler } from "./utils/predicateHandler";

// pickBy _.pickBy(object, [predicate=_.identity]) Creates an object composed of the object properties predicate returns truthy for. The predicate is invoked with two arguments: (value, key).
/* var object = { 'a': 1, 'b': '2', 'c': 3 };

_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 } */
export function pickBy(obj, predicate = item => item) {
  const DEFAULT_RESULT = {};
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return DEFAULT_RESULT;
  }

  const result = DEFAULT_RESULT;
  try {
    const matchesFunc = predicateHandler(predicate);
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i += 1) {
      console.log(keys[i]);
      console.log(obj[keys[i]]);
      console.log(matchesFunc(obj[keys[i]]));
      if (matchesFunc(obj[keys[i]])) {
        result[keys[i]] = obj[keys[i]];
      }
    }

    return result;
  }
  catch (Error) {
    return DEFAULT_RESULT;
  }
}