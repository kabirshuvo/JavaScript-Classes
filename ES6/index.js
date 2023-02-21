

const searchInput = document.querySelector(".search");

const display = document.querySelector(".result");

const thanks = document.querySelector(".thanks");

/** Normal function that works perfectly */
function show() {
    display.innerHTML = this.value;
     let self = this;
    setTimeout(function (){
        thanks.innerHTML = `you have typed: ${self.value}`;
    }, 1000);
};

// const shoeme = () => {
    //display.innerHTML = this.value;
// }

const test = searchInput.addEventListener("keyup", show);

console.log(test);