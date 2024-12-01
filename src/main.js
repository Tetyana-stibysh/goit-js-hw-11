import { requestFoo } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconReject from './img/bi_x-octagon.png';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form-search');
const galleryImg = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

loader.style.display = 'none';
form.addEventListener('submit', makeGallery);

function makeGallery(event) {
  event.preventDefault();
  loader.style.display = 'block';
  const textInput = event.target.elements.text.value.trim();

  if (!textInput) {
    iziToast.show({
      message: 'Please fill in the search field.',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      iconUrl: iconReject,
      position: 'topRight',
      progressBarColor: '#FFBEBE',
    });
    loader.style.display = 'none';
    return;
  }

  requestFoo(textInput)
    .then(data => {
      loader.style.display = 'none';
      if (data.hits.length === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          backgroundColor: '#EF4040',
          messageColor: '#FAFAFB',
          iconUrl: iconReject,
          position: 'topRight',
          progressBarColor: '#FFBEBE',
        });
      }

      const markup = createMarkup(data.hits);
      galleryImg.innerHTML = markup;
    })
    .then(data => {
      let gallery = new SimpleLightbox('.gallery a', {
        captions: true,
        captionDelay: '250',
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionClass: '',
        captionHTML: true,
        captionClass: 'captions',
        className: 'simpl-lightbox',
      });
      gallery.refresh();
    })
    .catch(error => {
      iziToast.show({
        message: 'The site is not responding or not found',
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        iconUrl: iconReject,
        position: 'topRight',
        progressBarColor: '#FFBEBE',
      });
    })
    .finally(() => event.target.reset());
}
