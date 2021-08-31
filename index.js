
const advice = [
    "YES",
    "NO",
    "NO DOUBT ABOUT IT",
    "ABSOLUTELY",
    "THE STARS SAY NO",
    "SO IT SHALL BE",
    "UNLIKELY",
    "INDICATIONS SAY YES",
    "POSITIVELY",
    "YOU CAN COUNT ON IT",
    "ANSWER UNCLEAR ASK LATER",
    "DON'T BET ON IT",
    "LOOKS LIKE YES",
    "CHANCE AREN'T GOOD",
    "FOCUS AND ASK AGAIN",
    "CAN'T SAY NOW",
    "PROSPECT GOOD",
    "VERY LIKELY",
    "CONSULT ME LATER",
    "CANNOT FORETELL NOW"
]

let shakeIT = document.getElementById("adviceBtn")
shakeIT.addEventListener("click", function() {
  let count = 1
console.log("cliked")
const randomColor = Math.floor(Math.random()*56)+955
document.getElementById("container").style.background = "#" + randomColor
const randomElement = advice[Math.floor(Math.random() * advice.length)]
if (myInput.value) {
shake()
document.getElementById("adviceDisplay").innerHTML = randomElement
document.getElementById('myInput').value = ''
document.getElementById("adviceEye").classList.remove('shake')

}
else {document.getElementById("adviceDisplay").innerHTML = "Please write a question!"}
})

const shake = () => {
    return adviceEye.classList.add('shake');
}
