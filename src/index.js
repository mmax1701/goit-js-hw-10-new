// https://api.thecatapi.com/v1/breeds?x-api-key=live_EJrN7e2BWq8nuTG6cxjyRu8hHhViUZv3d3f01D7MOLowcl2vTNvfHudaMaMhvVR8


const select = document.querySelector('.breed-select')

const ENDPOINT = 'https://api.thecatapi.com/v1/breeds';
const KEY = 'live_EJrN7e2BWq8nuTG6cxjyRu8hHhViUZv3d3f01D7MOLowcl2vTNvfHudaMaMhvVR8';

select.addEventListener('change', onSelect)

function onSelect() {
    fetchBreeds(arr)
    select.value = arr.id
    console.log(arr);
}

function fetchBreeds() {
   return fetch(`${ENDPOINT}?x-api-key=${KEY}`)
        .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.status)
            }
            return resp.json()
        })
        .then(data => data.map((id) => console.log(id)))
        .catch()
    
}


