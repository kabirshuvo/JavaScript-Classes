//* truthy falsy

let myVar = "test";

// false, 0, "", Null, undefined, NaN only this 6 will be falsy; all are truthy;

if (myVar) {
console.log("i am truthy");
}
else{
    console.log("i am falsy");
}