const users = [
    {
        id: 007,
        name: 'Jol',
        job: 'childing'
    }
]

//console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {
            id: 1, name: 'bulbuli', job:'Lungi Dance'
        },
        {
            id: 2, name: 'tuntuni', job: 'joy Sing'
        },
    ]
}

//console.log(data.data[1].name);

const user = {
    id: 2013,
    name: 'Sectro-13',
    address: {
        street:{
            first: '32/A New Eskaton',
            second: 'dilu Road',
            third: '7th floor', fourth: '7B'
        },
    }
}

//console.log(user.address.street.third);

const userStreet = user.address.street?.first;
console.log(userStreet);

/*
*Optional Chaining:>>> ? 

*যদি কোনো ডাটা না থাকে বা একসেস করা না যায় তাহলে ? প্রশ্নবোধক চিহ্ন ব্যাবহার করে দেখা যায় কোথায় কি অবস্থা চলছে? 

*এটা মুলত ব্যাকএন্ড থেকে ডাটা নিয়ে আসার সময় অনেক মিসিং ডাটা থাকে, হয়ত কেউ এডড্রেস দেয় নাই ইত্যাদি ক্ষেত্রে ? ব্যাবহার করে ডাটা টাকে ওখানেই ষ্টপ করে দেয়ার জন্য ? ব্যবহার করতে হবে। 
 */