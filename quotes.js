const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => displayQuote(data))
}
const displayQuote = (quote) =>{
    const blockQuote = document.getElementById('quotes');
    blockQuote.innerHTML = quote.quote;
    
}

loadQuotes();