// alert("index.js terinisialisasi")

// Generate random number between 1-6 for player 1 and 2
let randomNum1 = Math.floor(Math.random() * 6) + 1
let randomNum2 = Math.floor(Math.random() * 6) + 1

// Assign image based on the random number generated
var randomDiceImg1 = "dice" + randomNum1 + ".png"
var randomDiceImg2 = "dice" + randomNum2 + ".png"

// Set random image source based on random number
const randomImgSource1 = `./images/${randomDiceImg1}`
const randomImgSource2 = `./images/${randomDiceImg2}`

let img1 = document.querySelectorAll("img")[0]
let img2 = document.querySelectorAll("img")[1]

img1.setAttribute("src", randomImgSource1)
img2.setAttribute("src", randomImgSource2)

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = ("Player 1 Menang")
} else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = ("Player 2 Menang")
} else {
    document.querySelector("h1").innerHTML = ("Game Seri")
}

