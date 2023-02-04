const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'RebekaPurple' },
    { name: 'Walton', camera: 12, storage: '32gb', price: 26000, color: 'Black' },
    { name: 'Xiaomi', camera: 12, storage: '32gb', price: 25000, color: 'aliceBlue' },
    { name: 'i-phone', camera: 12, storage: '32gb', price: 96000, color: 'Black' },
    { name: 'alcatel', camera: 12, storage: '32gb', price: 46000, color: 'Black' },
    { name: 'velkatel', camera: 12, storage: '32gb', price: 56000, color: 'Black' },
    { name: 'Telting', camera: 12, storage: '32gb', price: 66000, color: 'Black' },
    { name: 'Htc', camera: 12, storage: '32gb', price: 76000, color: 'Black' },
];

function cheapestPhone (phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }

    }
    return cheapest;
}

const myChoice = cheapestPhone(phones);
console.log(myChoice);
