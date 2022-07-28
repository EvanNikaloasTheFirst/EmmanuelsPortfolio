// All Images
var imageOne = document.getElementById('image1');
var imageTwo = document.getElementById('image2');
var imageThree = document.getElementById('image3');
var imageFour = document.getElementById('image4');
var imageFive = document.getElementById('image5');
var imageSix = document.getElementById('image6');
var imageSeven = document.getElementById('image7');

var header = document.getElementsByTagName('header')

var btn = document.getElementsByTagName('button')

var hamburger = document.getElementsByClassName('on')


ScrollReveal().reveal('.socials-image-box');
ScrollReveal().reveal(imageOne, { delay: 500 })
ScrollReveal().reveal(imageTwo, { delay: 650 })


ScrollReveal().reveal(imageThree, { delay: 500 })

ScrollReveal().reveal(imageFour, { delay: 700 })

ScrollReveal().reveal(imageFive, { delay: 900 })

ScrollReveal().reveal(header, {delay: 500})
