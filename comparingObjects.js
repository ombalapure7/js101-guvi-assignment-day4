var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

// op: false
JSON.stringify(obj1) === JSON.stringify(obj2);

// To compare two objects with same propeties but without order
// op: true
_isEqual(obj1, obj2);

// NOTE: We need to use import the LODASH library 


