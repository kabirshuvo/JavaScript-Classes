//* Fat Arrow function

//* version 1
// function number(){
//     return 10;
// }

//* version 2
let number = () => {
    return 10;
}

//* version 3 (don't have to write return)

let number1 = () => 10;


//********************* .this Keyword */

let javascript ={
    name: 'javaScript',
    libraries: ['react', 'Angular', 'Vue'],
    printLibraries: function(){
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`)
        )
    }
}

javascript.printLibraries();