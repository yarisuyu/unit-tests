import { matchesProperty, matchesFunction, matches, property } from "./matchers";

export function predicateHandler(predicate = item => item) {
  let matchesFunc;
   switch (typeof predicate) {
    case 'function': {
      return matchesFunc = matchesFunction(predicate);
    }
    break;
    case 'object': {
      if (Array.isArray(predicate)) { // `_.matchesProperty` iteratee shorthand.
        if (predicate.length > 2) {
          console.log('matches property failed');
          throw Error('INVALID predicate type');
        }
        matchesFunc = matchesProperty(predicate);
      } else { // `_.matches` iteratee shorthand.
        matchesFunc = matches(predicate);
      }
    }
    break;
    case 'string': { // `_.property` iteratee shorthand
      matchesFunc = property(predicate);
    }
    break;
     default: {
       throw Error('INVALID predicate type');
     }
   }
  return matchesFunc;
}