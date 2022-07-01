let url = 'http://localhost:3001/products'
axios.get(url)
    .then(res => reload(res.data))



let header = document.querySelector('.header')

let things = document.querySelector('.things')

function reload(arr) {
    things.innerHTML = ''
    for(let item of arr){
        things.innerHTML += `
        <div class="ludi">
                <span class="ludi_p">${item.name}</span>
                <span class="ludi_p">${item.comp}</span>
                <span class="ludi_p">${item.price}</span>
        </div>
        <hr class="hr_ludi">
        `

        
    }
}