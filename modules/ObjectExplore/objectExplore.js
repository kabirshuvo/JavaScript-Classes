const player = {};
player.name = 'Mustafizur Rahman';
player.speciality = 'Boller';
player.ball = function(){
    console.log('swing your Ball')
}

// console.log(player);
player.ball();

const student = {
    name: 'Pandey',
    job: 'khai andey',
    ball: function(){
        console.log('throw the ball');
    },
    salary: 500
}

//1. Example of an literal Object
const me = {
    name: 'Kabir SHuvo',
    age: 40,
    height: 5.5,
    color: 'Tamate',
    spouse: true,
    child: 'Athena ShuddhoJol Padmo', profession: 'Web Developer'
}
//console.log(me);

//2. Example of Object Constructor
const person = new Object()
//console.log(person);

//3. Example of Object create method
const item = Object.create(null);
//console.log(item);

const looser = Object.create(me);
//console.log(looser.name);


//4. Class

class Person1{
    name = 'Kabir SHuvo';
    constructor(age){
        this.age = age;
    }
    height = 5.5;
    color = 'Tamate';
    spouse = true;
    child = 'Athena ShuddhoJol Padmo'; profession = 'WebDeveloper';
}

const personInfo = new Person1(40);
console.log(personInfo);

//5. Function

//backdated; 