

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';

const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`;

const createGalleryItemsMarkup = items => items.map(createGalleryItem).join('');

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryItemsMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});