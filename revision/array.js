console.log('array.js');

const products = [
    {name: 'mobile', brand: 'gionee', price: '1000', color: 'black'},
    {name: 'laptop', brand: 'Lenevo', price: '45000', color: 'black'},
    {name: 'headphone', brand: 'lenevo', price: '2100', color: 'black'},
    {name: 'camera', brand: 'fujifilm', price: '120000', color: 'black'},
    {name: 'watch', brand: 'casio', price: '5500', color: 'mixed'},
    {name: 'sunglass', brand: 'rayban', price: '2200', color: 'black'},
    {name: 'monitor', brand: 'lg', price: '28000', color: 'black'},
    {name: 'table', brand: 'non-brand', price: '7000', color: 'white'}
];

const name = products.map(product => product.name);
console.log(name);
const brand = products.map(product => product.brand);
console.log(brand);

const price = products.map(product => product.price);
console.log(price);

const color = products.map(product => product.color);
console.log(color);

