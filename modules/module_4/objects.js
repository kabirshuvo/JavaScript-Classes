//...........................
// <<<:::OBJECTS:::>>>

// const student = {
//     id: 115,
//     name: 'Xadu.life',
//     class: 10,
//     marks: 99
// }

// const mobile = {
//     brand: 'Nokia',
//     price: 19000,
//     storage: 32,
//     camera: 7,
// }

// const myComputer = {
// brand: 'Intel',
// price: 35000,
// color: 'Black',
// processor: 'i5',
// }
// console.log(myComputer);
const shopingCart = {
    biri: '3pack',
    rice: '25kg',
    daal: '5kg',
    icecream: 'zoomanzee',
    tamak: 25,
}
//console.log(shopingCart.biri);
//......................................................
// ...Multiple Ways to get and set object keys value...
//......................................................

let riceCount = shopingCart.rice;
//console.log(riceCount);

// let properties = Object.keys(shopingCart);
// console.log(properties);
// let propertyValues = Object.values(shopingCart);
// console.log(propertyValues);
let propertyName = 'biri';
let propertyValue = shopingCart[propertyName];
console.log(propertyName, propertyValue);