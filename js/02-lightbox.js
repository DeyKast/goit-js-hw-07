import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createElement = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const galleryMarkup = galleryItems
  .map((image) => createElement(image))
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  /* options */
});
