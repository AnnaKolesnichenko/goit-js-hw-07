import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const cardsGallery = document.querySelector('.gallery');

//creating gallery of items on page
function onCardsGalleryCreate(items) {    
    return items.map((item) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img class="gallery__image" 
                    src="${item.preview}" 
                    alt="${item.alt}" 
                    title="${item.alt}"/>
            </a>
        </li>          
        `;
    }).join('');        
}
const cardsOfGallery = onCardsGalleryCreate(galleryItems);
cardsGallery.insertAdjacentHTML('afterbegin', cardsOfGallery);

const div = document.createElement('div');
div.id = 'lightbox';
document.body.appendChild(div);

/*function onLightBoxCreate(e) {
    e.preventDefault();

    const image = e.target;
     const lightbox = new SimpleLightbox('.gallery__item .gallery__link', 
                                        {captionDelay: 250},
                                        {close: true},
                                        {enableKeyboard: true});
   
    
}
//const lightBox = $('.gallery__item a').SimpleLightbox();

cardsGallery.addEventListener('click', onLightBoxCreate);*/
new SimpleLightbox('.gallery__item a', {captionDelay: 250}, {enableKeyboard: true}, {captionsData: 'alt'}, {captions: true});

