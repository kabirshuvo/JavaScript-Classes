function a(){
    console.log('a')
    b()
    console.log('aa');
}

function b(){
    console.log('b');
    c();
    console.log('bb')
}

function c(){
    console.log('c');
    d()
    console.log('cc');

}
function d(){
    console.log('d');
    console.log('dd');
    
}
function x(){
    console.log('x');
    y()
    console.log('xx');
    
}
function y(){
    console.log('y');
    z()
    console.log('yy');
    
}
function z(){
    console.log('z');
    console.log('zz');
    
}

setInterval (() =>{
    console.log('Asynchronized')
}, 1000) 

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


a();
x();