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
    x()
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

a();
//x();