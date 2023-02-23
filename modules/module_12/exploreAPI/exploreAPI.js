const user = {
    id: 1, name: 'KaaBir', job: 'tobbing'
}; 

const stringified = JSON.stringify(user)


// console.log(user);

// console.log(stringified);

const shop = {
    owner: 'ZOO',
    address: {
            thana: 'raipur',
            tana: 'mollarHaat',
            hana: 'kerowa', country: 'Bangladesh'
    },

    product: ['lapto', 'mic', 'monitor', 'keyboard'],
    revenue: 500,
    isOpen: true, isOld: false
};
const shopJason = JSON.stringify(shop);
console.log(shopJason);


const shopObj = JSON.parse(shopJason);
console.log(shopObj);

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name); 