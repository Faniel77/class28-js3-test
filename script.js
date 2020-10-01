'use strict';

/*
    Put your JavaScript here
*/

// The function below is not working properly. I spent most of the time trying to figure out how to get 3 movies from the API. Now i have the data for only 1 movies and it's not rendered correctly in to the DOM
function main() {
  async function fetchData() {
    const fetchData = await fetch(
      'http://www.omdbapi.com/?i=tt3896198&apikey=5f6bcf48&',
    );
    const parsedData = await fetchData.json();
    console.log(parsedData);
    renderToTheDom(parsedData);
  }
  fetchData();

  //render the data

  const select = document.createElement('select');
  document.body.appendChild(select);

  function renderToTheDom(parsedData) {
    const options = document.createElement('option');
    options.innerText = parsedData.Title;
    options.value = parsedData.Poster;
    select.appendChild(options);

    select.addEventListener('click', function () {
      const image = document.createElement('img');
      image.id = 'images';
      image.src = select.value;
      document.body.appendChild(image);
    });
  }
}
window.addEventListener('load', main);
