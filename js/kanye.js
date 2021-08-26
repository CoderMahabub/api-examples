const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(quote => displayQuote(quote));
}

const displayQuote = (quote) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}