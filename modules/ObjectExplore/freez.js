const bottle = {
    color: 'yellow',
    price: 50,
    isClean: true,
    capacity: '1 litter'
}

const keys = Object.keys(bottle)

//console.log(keys);

const values = Object.values(bottle);
//console.log(values);

const pair = Object.entries(bottle);
//console.log(pair);
Object.seal(bottle);
delete bottle.isClean;

console.log(bottle);