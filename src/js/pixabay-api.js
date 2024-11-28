import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const API_KEY = '47335569-2cc921a6a7f6f320b70df2266';
export const URL = 'https://pixabay.com/api/';
export let searchedQ = 'rose';

export const searchParams = new URLSearchParams({
  key: API_KEY,
  q: searchedQ,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});
export function requestFoo(url, params) {
  return fetch(`${url}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const array = data.hits;
      console.log(array);
    })
    .catch(
      error =>
        (error =
          'Sorry, there are no images matching your search query. Please try again!')
      //   iziToast.show({
      //     message:
      //       'Sorry, there are no images matching your search query. Please try again!',
      //     backgroundColor: 'EF4040',
      //     color: 'FAFAFB',
      //   })
    );
}
// requestFoo(URL, searchParams);
