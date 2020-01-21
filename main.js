let quoteText = '';
let quoteAuthor = '';

const getNewColor = (oldColor) => {
    const colors = [
        '#cc0000ff', '#e69138ff', '#f1c232ff',
        '#6aa84fff', '#3c78d8ff', '#674ea7ff',
        '#990000ff', '#b45f06ff', '#bf9000ff',
        '#38761dff', '#1155ccff', '#351c75ff',
    ];
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while(newColor === oldColor)
        newColor = colors[Math.floor(Math.random() * colors.length)];
    return newColor;    
}

const colorPage = (color) => {
    document.getElementById('app-container').style.backgroundColor = color;
    document.querySelector('.quote-container').style.color = color;
    const buttons = document.querySelector('.button-container').children;
    for(let i = 0; i < buttons.length; i++)
        buttons[i].style.backgroundColor = color;
};

const fetchQuotes = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
    .then(res => res.json())
    .then(data => {
        const newColor = getNewColor();
        colorPage(newColor);
        quoteText = data.quoteText.trim();
        quoteAuthor = data.quoteAuthor ? data.quoteAuthor : 'Unknown';
        quoteAuthor = quoteAuthor.trim();
        document.querySelector('.quotetext').textContent = quoteText;
        document.querySelector('.quoteauthor').textContent = quoteAuthor;
        document.getElementById('twitter').setAttribute('href', 
        `https://twitter.com/intent/tweet?text="${quoteText}" - ${quoteAuthor}`);
    })
    .catch(err => { console.log(err); });
};

colorPage('#000000ff');
fetchQuotes();

document.getElementById('new-quote').addEventListener('click', () => fetchQuotes());
