//Strings Practice
// const myAddress = '222/B Shahabug Tower, Dhaka';
// console.log(myAddress);

// const addressLength = myAddress.length;
// console.log(addressLength);

const lyrics = 'Tumi Bondhu Kala Pakhi, ami jeno ki. Boshonto kale tomai koite parini';

const searchFor = 'Kala Pakhi'
const doseExist = lyrics.toLowerCase().includes(searchFor.toLowerCase());
console.log(doseExist);

if(lyrics.indexOf('Bondhu') !== -1){
console.log('This word Exist in the lyrics');
}

else{
    console.log('Nai Nai Nai re Pagol')
}

// *** starts With

// *** endswith