// import { nouns, adjectives } from "./words.js"

function getRandomWord (array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

window.onload = function () {
    for (i = 0; i < 50; i++) {
        document.getElementById("textbox").value = 
            document.getElementById("textbox").value + 
            getRandomWord(adjectives) + " " + getRandomWord(nouns) + "\n"
    }
}