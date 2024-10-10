// https://api.thecatapi.com/v1/breeds?x-api-key=live_EJrN7e2BWq8nuTG6cxjyRu8hHhViUZv3d3f01D7MOLowcl2vTNvfHudaMaMhvVR8


const select = document.querySelector('.breed-select')
const info = document.querySelector('.cat-info')
const loader = document.querySelector('.loader')
const error = document.querySelector('.error')


select.style.display = 'none'
error.style.display = 'none'


const URL = 'https://api.thecatapi.com/v1';
const KEY = 'live_EJrN7e2BWq8nuTG6cxjyRu8hHhViUZv3d3f01D7MOLowcl2vTNvfHudaMaMhvVR8';

select.addEventListener('change', onSelect)

function onSelect(evt) {
    info.style.display = 'none';
    loader.style.display = 'block';
    const catId = evt.target.value;
    fetchCatByBreed(catId)
}

function fetchBreeds() {
    loader.style.display = 'block';
   return fetch(`${URL}/breeds?x-api-key=${KEY}`)
       .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json()
       })
       .then(data => {
           select.style.display = 'block'
           loader.style.display = 'none';
           data.map(elem => select.insertAdjacentHTML('beforeend', `<option value="${elem.id}">${elem.name}</option>`))
       })
       .catch(err => console.log(err))
}

fetchBreeds()


function fetchCatByBreed(breedId) {
   return fetch(`${URL}/breeds/${breedId}?x-api-key=${KEY}`)
        .then(resp => {
            console.log(resp);
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json();
        }
    )
       .then(elem => {
           info.style.display = 'block'
           loader.style.display = 'none';
           info.innerHTML = `<img src="https://cdn2.thecatapi.com/images/${elem.reference_image_id}.jpg" alt="${elem.name}" width="300px">
    <h1>${elem.name}</h1>
    <p>${elem.description}</p>
    <p>Temperament: ${elem.temperament}</p>`})
        .catch(err => console.log(err))
}