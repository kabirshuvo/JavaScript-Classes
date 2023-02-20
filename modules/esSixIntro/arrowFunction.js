//function declaration
function add(first, second){
    const total = first + second;
    return total;
}

//function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}

//function annonymous expression
const add2 = function (first, second){
    const total = first + second;
    return total;
}


function add3(first, second){
    return first + second; 
}

const add4 = function(first, second){
    return first + second;
}
//Arrow Function
const add5 = (first, second) => first + second;

const result = add(10,20);
console.log(result);






