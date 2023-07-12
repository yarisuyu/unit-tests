    // merge _.merge(object, [sources])
    /*This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
    // Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively.
    // Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.
Note: This method mutates object.*/
/* var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

_.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }*/
export function merge(object, sources = []) {

}
