// seleziono elemento di output
const cardContainer = document.querySelector('.card-container');

//setto la variabile dell'endpoint
const apiRef = 'https://lanciweb.github.io/demo/api/pictures/';

//svuoto il contenitore
cardContainer.innerHTML = '';

//chiamata ajax all'api
axios.get(apiRef).then((response) => {
    //estrapoliamo i dati
    const photos  = response.data;
    console.log('Dati ricevuti', photos);
    
}
)