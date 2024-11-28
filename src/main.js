import { API_KEY } from './js.pixabay-api.js';
console.log(API_KEY);

const form = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', makeGallery);

function makeGallery(event) {
  event.preventDefault();
  searchedQ = event.target.elements.text.value;
  console.log(searchedQ);

  console.log(requestFoo(URL, searchParams));
}
