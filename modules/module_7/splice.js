const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87, 99];

/**
 * 1. Removes elements from an array
 * 2. add, if necessary, inserts new elements in their place
 * 3. returning the deleted elements.
 * 4. will change the original array
 * 
 *
 */

//const partial = friends.splice(2, 5);
const partial = friends.splice(2, 5, 100, 200, 300, 400, 500, 700);
console.log(partial);
console.log(friends);