// seleziono elemento di output
const cardContainer = document.querySelector('.card-container');
const closeButton = document.getElementById('overlay-close')
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');

//setto la variabile dell'endpoint
const apiRef = 'https://lanciweb.github.io/demo/api/pictures/';

//svuoto il contenitore
cardContainer.innerHTML = '';

//chiamata ajax all'api
axios.get(apiRef).then((response) => {

    //estrapolo i dati
    const photos  = response.data;
    //console.log('Dati ricevuti', photos);

    //creo variabile di accumulo
    let cardsHtml = '';

    //ciclo l'array "photos" con forEach. Per ogni elemento "photo" trovato.
    photos.forEach(photo => {
        cardsHtml += `
            <div class="card">
                <img class="pin" src="img/pin.svg" alt="puntina">
                
                <img class="photo-card" src="${photo.url}" alt="${photo.title}">
                
                <div class="photo-details">
                    <span class="photo-date">${photo.date}</span>
                    <h3>${photo.title}</h3>
                </div>
            </div>
        `;
    });

    // Dopo che il ciclo ha finito di costruire la stringa con tutte le card la inserisco nella pagina.
    cardContainer.innerHTML = cardsHtml;

    //seleziono ogni card
    const cards = document.querySelectorAll(".card");
    console.log(cards);
    
    //associo ad ogni card un evento
    cards.forEach(cardItem => {
        cardItem.addEventListener('click', () => {
            // Trovo l'immagine specifica dentro la card che è stata cliccata
            const imageCard = cardItem.querySelector('.photo-card');
           //prendo i suo attributi
            const imgSrc = imageCard.src;
            const imgAlt = imageCard.alt;
           //imposto src e alt sull'immagine overlay
            overlayImage.src = imgSrc;
            overlayImage.alt = imgAlt;
            
            //mostra overlay
            overlay.classList.add('active')
        })
    })

    //bottone "chiudi" overlay
    closeButton.addEventListener('click', () => {
    overlay.classList.remove('active');

});
})