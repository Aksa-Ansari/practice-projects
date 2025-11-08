let quoteText = document.querySelector("#quote");
let authorText = document.querySelector("#author");
let newQuoteBtn =document.querySelector("#newQuote");
let shareQuoteBtn = document.querySelector("#shareQuote");

function getQuote(){
    quoteText.innerText ="Loading...";
    authorText.innerText = "";
    
    fetch("https://dummyjson.com/quotes/random")
    .then(res => res.json())
    .then(data=>{
        quoteText.innerText=`${data.quote}`
       authorText.innerText = `${data.author}`;
    })
    .catch(err =>{
        quoteText.innerText="Failed to fetch quote 😢";
        quoteText.innerText="";
        console.log(err);
    })
}

shareQuoteBtn.addEventListener("click", () => {
  const tweet = `${quoteText.innerText} ${authorText.innerText}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  window.open(twitterUrl, "_blank");
});

getQuote()

newQuoteBtn.addEventListener("click", getQuote)