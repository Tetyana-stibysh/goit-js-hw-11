export function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        `<li class="img-item">
        <a class="gallery-link" href="${largeImageURL}">
		<img 
			class="gallery-image" 
			src="${webformatURL}" 
			alt="${tags}" 
			/>
	</a>
        <ul class="list-text">
          <li class="item-text">
            <h2 class="title">Likes</h2>
            <p class="text-info">${likes}</p>
          </li>
          <li class="item-text">
            <h2 class="title">Views</h2>
            <p class="text-info">${views}</p>
          </li>
          <li class="item-text">
            <h2 class="title">Comments</h2>
            <p class="text-info">${comments}</p>
          </li>
          <li class="item-text">
            <h2 class="title">Downloads</h2>
            <p class="text-info">${downloads}</p>
          </li>
        </ul>
      </li>`;
      }
    )
    .join('');
}
