import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createElement = ({ preview, original, description }) =>
  `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;

const galleryMarkup = galleryItems
  .map((image) => createElement(image))
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

const galleryClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

    instance.show();

    galleryEl.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  }
};

galleryEl.addEventListener("click", galleryClick);
