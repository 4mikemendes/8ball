
const advice = [
    "If you’re good at something, never do it for free.",
    "Do, or do not. There is no try.",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

// generate random light colors:
    // adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})

let shakeIT = document.getElementById("adviceBtn")
shakeIT.addEventListener("click", function() {
console.log("cliked")
const randomColor = Math.floor(Math.random()*56)+955
document.getElementById("container").style.background = "#" + randomColor
const randomElement = advice[Math.floor(Math.random() * advice.length)]
document.getElementById("adviceDisplay").innerHTML = randomElement
document.getElementById('myInput').value = ''

})


