"use strict";
let contener = document.getElementById('quote-contener')
let quoteText = document.getElementById('quoteText')
let auQuoteText = document.getElementById('auQuoteText')
let newBtn = document.getElementById('btn')
let twiter = document.getElementById('btn-tweet')
let loading = document.getElementById('loader')

function load (){
  loading.hidden = false;
  contener.hidden= true;
}

function complete () {
  if (!loading.hidden) {
    contener.hidden = false;
    loading.hidden = true;
  }
}


async function getQuote() {
  load();
  const apiUrl = 'https://type.fit/api/quotes';
    try {
      
   const response = await fetch(apiUrl);  
   const data = await response.json();
   var index = 1;
 

   newBtn.addEventListener("click", shyam)
  
  
  
   function shyam () {


   
    
    if(data[index].author === null) {
    return(
      quoteText.innerHTML = data[index].text,
      auQuoteText.innerHTML = 'Unknown',
      index++)
    } else{ 
      return(
      quoteText.innerHTML = data[index].text,
      auQuoteText.innerHTML = data[index].author,
      index++)

    }
    
   
  }

  
  if(data[index].text.length > 100){
    quoteText.classList.add('long-quote')
  } else if(data[index].text.length >= 38) {
    quoteText.classList.add('sort-quote')
  } else {
    quoteText.classList.add('quote')
  }
  complete();
}
  
  catch (error){
    quoteText.innerHTML =`"can't fetch data"`;
    auQuoteText.innerHTML = ``
  }
}



function tweetQuote () {
  const quote =  quoteText.innerHTML;
  const author =  auQuoteText.innerHTML;
  const twiterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twiterUrl, '_blank');
  
}

twiter.addEventListener("click", tweetQuote)

//On Load






getQuote(); 
