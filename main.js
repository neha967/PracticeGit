var me = {
    name: "Neha",
    profile: "developer",
    experience: "none",
    hirable: true,
    age: 30,
};

for(let value in me){
    console.log(me[value]);
}

for(let key in me){
    console.log(key);
}

console.log(Object.keys(me));

console.log(me.propertyIsEnumerable("profile"));

/*
Object.defineProperty(me, "name", {
    enumerable: false,
    configurable:false,
    writable: false
});
*/

//me.name = "Aastha";
//delete me.name
//console.log(me.name);
//console.log(me.propertyIsEnumerable("name"));

console.log(Object.isExtensible(me));

console.log(Object.isSealed(me));

Object.preventExtensions(me);

console.log(Object.isExtensible(me));

Object.seal(me);

console.log(Object.isSealed(me));

me.weight = 50;
me.age = 29
console.log(me.weight);
console.log(me.age);
delete me.age
console.log(me.age);

console.log(Object.isFrozen(me));

Object.freeze(me);

me.name="Muskaan"
console.log(me.name);

console.log(Object.getPrototypeOf(me));

console.log(Object.getOwnPropertyDescriptor(me, "name"));

console.log(me instanceof Object);
console.log("name" in me);
console.log("hasOwnProperty" in me);
console.log(me.hasOwnProperty("hasOwnProperty"));
console.log(me.hasOwnProperty("height"));
console.log(me.hasOwnProperty("experience"));
