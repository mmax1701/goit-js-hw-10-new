import {fetchBreeds, fetchCatByBreed} from './cat-api'

export const select = document.querySelector('.breed-select')
export const info = document.querySelector('.cat-info')
export const loader = document.querySelector('.loader')
export const error = document.querySelector('.error')


select.style.display = 'none'
error.style.display = 'none'


export const URL = 'https://api.thecatapi.com/v1';
export const KEY = 'live_EJrN7e2BWq8nuTG6cxjyRu8hHhViUZv3d3f01D7MOLowcl2vTNvfHudaMaMhvVR8';



select.addEventListener('change', onSelect)

function onSelect(evt) {
    info.style.display = 'none';
    loader.style.display = 'block';
    const catId = evt.target.value;
    fetchCatByBreed(catId)
}



fetchBreeds()


