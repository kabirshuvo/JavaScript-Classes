// const loadQuote = () =>{
//     fetch('https://api.kanye.rest/')
//     .then(res => res.json())
//     .then(data => displayQuote(data))
// }

const loadQuotes = async() => {
    const URL = 'https://api.kanye.rest/';
   try{
    const res = await fetch(URL);
    const data = await res.json();
    displayQuote(data);
   } catch(err){
    console.log(err);
   }
}

const displayQuote = quote => {
   const blockQuote = document.getElementById('quote');
   console.log(quote);

   blockQuote.innerHTML = quote.quote;

}



loadQuotes();