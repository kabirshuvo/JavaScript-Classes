const phones = [
   {name: 'sumsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'}, 
   {name: 'Walton', camera: 10, storage: '32gb', price: 21000, color: 'silver'}, 
   {name: 'i-phone', camera: 16, storage: '64gb', price: 96000, color: 'silver'}, 
   {name: 'xiomi', camera: 20, storage: '64gb', price: 26000, color: 'silver'}, 
   {name: 'nokia', camera: 12, storage: '32gb', price: 16000, color: 'silver'}, 
   {name: 'oppoo', camera: 24, storage: '32gb', price: 29000, color: 'silver'}, 
   {name: 'symphony', camera: 20, storage: '32gb', price: 18000, color: 'silver'}, 
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);

console.log('I wiil take this:', mySelection);