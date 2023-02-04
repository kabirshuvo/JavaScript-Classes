// *****Module 23-1 (Array.isArray && .include && .concat());*****
// const country = 'Argentina';
// const age = 44;
// const isIndependent = true;
// const student = {id: 121, class: 11, name: 'Agun'};
// const friends = [13, 14, 11, 17, 21, 16, 15, 20];

// // --------------------
// console.log(friends.includes(13));

// // console.log(typeof country);
// // console.log(typeof age);
// // console.log(typeof isIndependent);
// // console.log(typeof student);

// // // ---------------------------------
// // console.log(Array.isArray(friends));
// // console.log(friends.length);
// // // ----------------------------

// const friends1 = ['shoju', 'shourov'];
// const friends2 = ['kollol', 'sajul'];
// const allFriends = friends1.concat(friends2);

// console.log(allFriends);

//*****23.2  (Slice && splice)*/

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ];

// const targetedNumbers = numbers.slice(4, 7);
// console.log(targetedNumbers);
// console.log(numbers);

// const deleteAndAddNumbers = numbers.splice(0, 1, 00, 10);
// console.log(deleteAndAddNumbers);
// console.log(numbers);

//*****23.3  (removeDuplicate)*/

const names = ['babu', 'tabu', 'khabu','labu','chabu','Babu','Babu','tabu','khabu','labu','pabu','nabu','Babu','babu','jabu','rabu','oabu','mabu','nabu','banabu','Babu',];

function removeDuplicate(names){
    const fresh =[];
    for(let i =0; i< names.length; i++){
        const name = names[i];
        if(fresh.includes(name) === false){
            fresh.push(name);
        }

    }
    return fresh;

}

const freshList = removeDuplicate(names)
console.log(freshList);