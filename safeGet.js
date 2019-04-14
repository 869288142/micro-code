const get = (obj, path, defaultValue) => path.split(".")
.reduce((a, c) => (a && a[c] ? a[c] : (defaultValue || null)), obj)

var object = { a: [{ b: { c: 3 } }] };
var result = get(object, 'a[0].b.c', 1); 
console.log(result)