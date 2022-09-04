import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const markup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
</a>`,
  ''
);

gallery.innerHTML = markup;

function createLightbox() {
  const gallery = new SimpleLightbox('.gallery a');

  gallery.on('show.simplelightbox', function () {
    // captionDelay = 250;
  });
}
createLightbox();
