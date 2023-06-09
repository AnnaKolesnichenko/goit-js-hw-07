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
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
            </a>
        </li>
        `;
    }).join('');        
}
const cardsOfGallery = onCardsGalleryCreate(galleryItems);
cardsGallery.insertAdjacentHTML('afterbegin', cardsOfGallery);

//creating basicLightbox
function onImageZoomed(event) {
    event.preventDefault();

    if(event.target.nodeName !== "IMG") {
        return;
    }

    const showingImage = event.target;
    console.log(showingImage);
   /* const instance = basicLightbox.create(
        `<img src="${showingImage.dataset.source}" width="800" height="600" >`
        )
    instance.show();*/

    const instance = basicLightbox.create(`<img src="${showingImage.dataset.source}" width="800" height="600" >`, {
		onShow: (instance) => window.addEventListener('keydown', escClose),
		onClose: (instance) => window.removeEventListener('keydown', escClose) 
	})

    function escClose(e) {
        if(e.key === 'Escape') {
            instance.close();
        }
    }

    instance.show();
}

cardsGallery.addEventListener ('click', onImageZoomed);  
