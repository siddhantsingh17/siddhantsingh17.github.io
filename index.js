
// document.querySelector('h1').innerHTML= 'Ram'

// document.querySelector('h1').style.backgroundColor = 'black'

// document.querySelector('button').style.borderRadius = "30px 10px 60px"

// document.querySelector('h1').addEventListener('click',()=> console.log("ram ram bhai"))

// बलाब 

let bulb = document.querySelector('.bulb')
let on = document.querySelector('button')

let b = 2;

on.addEventListener('click', () => {
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


// बलाब  end

//मित्र बटन दो

// let addButton = document.querySelector('#add')
// let friendStatusChange = document.querySelector('h5')
// let removeButton = document.querySelector('#Remove')

// addButton.addEventListener("click", ()=>{
//     friendStatusChange.innerHTML = "Your Firend"

// })

// removeButton.addEventListener('click',()=>{
//     friendStatusChange.innerHTML= "remove Friend"
// })

//मित्र बटन दो end

//मित्र बटन एक

// let addButton = document.querySelector('#add')
// let friendStatusChange = document.querySelector('h5')

// let a = 0;


// addButton.addEventListener("click", () => {
//     if (a == 0) {
//         friendStatusChange.innerHTML = "Your Firend"
//         addButton.innerHTML='remove'
//         a = 1;
//     }
//     else{
//         friendStatusChange.innerHTML = "remove"
//         addButton.innerHTML='add friend'
//         a = 0;
//     }


// })

//मित्र बटन एक end

// setTimeout(()=>{
//     console.log("ram")
// },5000)


// doble click on images 

let addButton = document.querySelector('#add')
let friendStatusChange = document.querySelector('h5')
let iconSelector = document.querySelector('#myIcon')
let imgSelector = document.querySelector('#myImages')

let a = 0;


addButton.addEventListener("click", () => {
    if (a == 0) {
        friendStatusChange.innerHTML = "Your Firend"
        addButton.innerHTML = 'remove'
        a = 1;
    }
    else {
        friendStatusChange.innerHTML = "remove"
        addButton.innerHTML = 'add friend'
        a = 0;
    }
})


// imgSelector.addEventListener('dblclick', ()=>{
//     iconSelector.style.opacity = '1'
// })

imgSelector.addEventListener("click", () => {
    if (a == 0) {
        iconSelector.style.scale = '7';
        a = 1;
    }
    else {
        iconSelector.style.scale = '0';
        a = 0
    }

})

let reg = /\wsiddhant/;
let str = "esiddhant is a bad boy that you"
let result = reg.exec(str)
console.log("this is a", result)

// if(reg.exec(str)){
//     console.log(`the string ${str} match the expresaon ${reg.source}`)
// }else{
//     console.log(`the string ${str} not match the expresaon${reg.source}`)
// }



//this keyword tutorial

// let thisKeyword = {
//     username: 'siddhant',
//     age: 34,

//     welcome: function () {
//       console.log(`hi ${this.username} you ${this.age} and it got ragested`)
//     }
//   }

//   thisKeyword.welcome(); //call 
//   thisKeyword.age=54   // change the age 
//   thisKeyword.welcome(); // call

// JavaScript Classes start

class fill{
    constructor(firstName,lastName,email,phone,company,){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.email = email;
        this.phone = phone;
        this.company = company;
    }

    changeFirstName(){
        return `${this.firstname}`
    }
    changelastName(){
        return `${this.laststname}`
    }
    changeemail(){
        return `${this.email}`
    }
    changephone(){
        return `${this.phone}`
    }
    changecompany(){
        return `${this.company}`
    }

}

const sid = new fill('siddhant','singh','sid@gmail.com',900477322274,'rilln')
console.log(sid)
const kri = new fill('krishna','singh','kri@gmail.com',8977322274,'keprosh')

console.log(kri)

// JavaScript Classes end


