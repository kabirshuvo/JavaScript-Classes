console.log('Keep Practicing');

const setItem = ()=>{
    localStorage.setItem('name:', 'Xadu')
}

const reload =()=>{
    window.location.reload(true);
}

const getAge = localStorage.setItem('age', '40');

//const age = localStorage.age = ('age', '40');


const getItem = () =>{
    const age = localStorage.getItem('age');
    document.getElementById('showItemUl').innerHTML = age;
};

const removeItem = () =>{
    localStorage.removeItem('age');
}

const clearItem = () => {
    localStorage.clear()
}

// **********
const name = {firseName: 'Abraham', lastName:'Linkon'}

const personStringify = JSON.stringify(name);


localStorage.setItem('name', personStringify);

// **********

