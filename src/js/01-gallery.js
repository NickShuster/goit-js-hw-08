
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const renderGallery = (galleryItems) => {
  const galleryMarkup = galleryItems
    .map((item) => createGalleryItem(item))
    .join('');

  gallery.innerHTML = galleryMarkup;
};

renderGallery(galleryItems);

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const largeImageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${largeImageUrl}" alt="" />
    `);

    instance.show();
  }
});
