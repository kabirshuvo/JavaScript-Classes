function add(first, second = 0){
    const total = first + second;
    return total; 
}

const result = add(10,);
console.log(result);

function fullName(first, last = 'Choudhuri'){
    const name = first + ' ' + last;
    return name
}

const name = fullName('Aslam');
console.log(name);