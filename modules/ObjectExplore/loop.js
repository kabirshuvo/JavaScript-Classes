const numbers = [1, 2, 3, 4, 5, 6, 7]

// for(const number of numbers){
//     console.log(number);
// }

const bottle = {
    color: 'yellow',
    price: 50,
    isClean: true,
    capacity: '1 litter'
}

//const keys = Object.keys(bottle);
//console.log(keys);
// for(const key of keys){
//     console.log(key, bottle[key]);
// }

// for(const key in bottle){
//     console.log(key, bottle[key]);
// }

const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}