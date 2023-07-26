let container = document.querySelector('#cont')


for(let i =1 ; i<200 ; i++ ){
let a = document.createElement('div')
let b = document.createElement('span')
b.innerText = `this is poke#${i}`
let newImg = document.createElement('img')
newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
a.appendChild(newImg)
a.appendChild(b)
container.appendChild(a)
}