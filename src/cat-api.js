import { select, info, loader, error, URL, KEY } from "./index";

export const fetchBreeds = function fetchBreeds() {
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
       .catch(err => {
           loader.style.display = 'none';
           error.style.display = 'block'
           console.log(err)
       })
}


export const fetchCatByBreed = function fetchCatByBreed(breedId) {
   return fetch(`${URL}/breeds/${breedId}?x-api-key=${KEY}`)
        .then(resp => {
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
    <p>Temperament: ${elem.temperament}</p>`
       })
       .catch(err => {
           select.style.display = 'none'
           loader.style.display = 'none';
           error.style.display = 'block'
           console.log(err)
       })
}