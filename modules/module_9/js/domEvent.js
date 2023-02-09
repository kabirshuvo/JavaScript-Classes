//***make-blue */
const makeBlueBtn = document.getElementById('make-blue');

    makeBlueBtn.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//*** make-purple*/
const makePurpleBtn = document.getElementById('make-purple')

makePurpleBtn.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = 'Pink';
}
//*** make-gray*/
const makeGrayBtn = document.getElementById('make-gray');

makeGrayBtn.addEventListener('click', makeGray);

function makeGray(){
    document.body.style.backgroundColor = 'gray';
}

//*** make-green */

const makeGreenBtn = document.getElementById('make-green');

makeGreenBtn.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
});


//*** make-golden */

document.getElementById('make-golden').addEventListener('click', function(){
document.body.style.backgroundColor = '#FFD700';
});
