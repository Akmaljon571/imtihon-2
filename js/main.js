import render from "./render.js"
import temp from "./temp.js"
import dataType from "./data.js"

let tbody = document.querySelector('.tbody')
let ism = document.querySelector('.ism')
let fam = document.querySelector('.fam')
let gr = document.querySelector('.gr')
let jsn = document.querySelector('.jsn')
let chex = document.querySelector('.chex')
let form = document.getElementById('form')

let data;
let storage = window.localStorage
let copy = storage.getItem('data')
if (copy) {
   data = JSON.parse(copy)
} else{
   data = []
}




form.addEventListener('submit', (event)=>{
    event.preventDefault()
    let newObj = new render(ism.value, fam.value, gr.value, jsn.value, chex.value, )
    let tem = temp(newObj);
    tbody.append(tem)
    data.push(newObj);
    storage.setItem('data', JSON.stringify(data))
})

data.forEach(key => {
    let tem = temp(key);
    tbody.append(tem)
});
