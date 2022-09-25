// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css"

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryList = galleryItems.map(({preview, original, description}) => `
<li class="gallery__list">
    <a class="gallery__item" href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}"
            alt="${description}"
        />
    </a>
</li>`).join("");

gallery.insertAdjacentHTML("beforeend", galleryList);

const lightboxGallery = new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });