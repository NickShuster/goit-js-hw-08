import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

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

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
      captionPosition: 'bottom',
      overlay: true,
      animationSpeed: 250,
      fadeSpeed: 250,
      closeText: '×',
      swipeClose: true,
      history: true,
    });

    lightbox.open({ startAt: galleryItems.findIndex(item => item.original === largeImageUrl) });
  }
});