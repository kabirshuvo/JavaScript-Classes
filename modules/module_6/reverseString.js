function reverseString(text){

    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        const reversed = reversed + element;

    }
}

const myString = 'I am Learning javaScript';
const reversed = reverseString(myString);
console.log('reversed output:', reversed);