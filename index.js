
// document.querySelector('h1').innerHTML= 'Ram'

// document.querySelector('h1').style.backgroundColor = 'black'

// document.querySelector('button').style.borderRadius = "30px 10px 60px"

// document.querySelector('h1').addEventListener('click',()=> console.log("ram ram bhai"))

// बलाब 

let bulb = document.querySelector('.bulb')
let on = document.querySelector('button')

let b = 2;

on.addEventListener('click', ()=> {
    if (b == 2) {
        bulb.style.backgroundColor = 'transparent'
        b = 1
        on.innerHTML = 'on'

    }
    else {
        bulb.style.backgroundColor = 'yellow'
        on.innerHTML = 'off'
        b = 2;

    }
})

