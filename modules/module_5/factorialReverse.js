function rFacetorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result *i;
    }
    return result;
}
const number = 15;
const fact = rFacetorial(number);
console.log('factorial of:', number, fact);