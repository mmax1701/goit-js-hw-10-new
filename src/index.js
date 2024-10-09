// https://api.thecatapi.com/v1/breeds?x-api-key=live_EJrN7e2BWq8nuTG6cxjyRu8hHhViUZv3d3f01D7MOLowcl2vTNvfHudaMaMhvVR8


const select = document.querySelector('.breed-select')
const info = document.querySelector('.cat-info')

const URL = 'https://api.thecatapi.com/v1';
const KEY = 'live_EJrN7e2BWq8nuTG6cxjyRu8hHhViUZv3d3f01D7MOLowcl2vTNvfHudaMaMhvVR8';

select.addEventListener('change', onSelect)

function onSelect(evt) {
    const catId = evt.target.value;
    fetchCatByBreed(catId)
}

function fetchBreeds() {
   return fetch(`${URL}/breeds?x-api-key=${KEY}`)
       .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json()
        })
}

fetchBreeds().then(data => data.map(elem => select.insertAdjacentHTML('beforeend', `<option value="${elem.id}">${elem.name}</option>`))).catch(err => console.log(err))


function fetchCatByBreed(breedId) {
    console.log(breedId);
    fetch(`${URL}/images/search?breed_ids=${breedId}`)
        .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json();
        }
    )
    //     .then(data => data.map(elem => (info.innerHTML =`<img src="${elem.url}" alt="#" width="300px">
    // <h1></h1>
    // <p></p>
    // <p>Temperament:</p>`)))
    //     .catch(err => console.log(err))

    .then(data => console.log(data))
        .catch(err => console.log(err))
}