// seleziono elemento di output
const cardContainer = document.querySelector('.card-container');

//setto la variabile dell'endpoint
const apiUrl = 'https://lanciweb.github.io/demo/api/pictures/';

//svuoto il contenitore
cardContainer.innerHTML = '';

//chiamata ajax all'api