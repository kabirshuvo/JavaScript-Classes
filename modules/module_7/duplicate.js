const fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Pinapple", "Guava", "Sofeda", "Banana", "Orange", "Banana"];
console.log(fruits);

function removeDuplicate1(fruits){
    const unique = [];
    for(let i = 0; i < fruits.length; i++){
        const fruit = fruits[i];
        if(unique.includes(fruit) === false){
            unique.push(fruit);
        }
    }
    return unique;
}

const uniqueFruits = removeDuplicate1(fruits);
console.log(uniqueFruits);