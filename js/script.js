const playBtn = document.getElementById("playBtn")
const player = document.getElementById("player")

const page1 = document.getElementById("page1")
const storyPage = document.getElementById("storyPage")
const questionPage = document.getElementById("questionPage")
const yesPage = document.getElementById("yesPage")

const storyText = document.getElementById("storyText")

const yesBtn = document.getElementById("yesBtn")
const noBtn = document.getElementById("noBtn")

/* MUSIC PLAYLIST */

const playlist = [
"/music/Ho.mp3",
"/music/How.mp3",
"/music/Ye.mp3",
"/music/Yes.mp3"
]

let songIndex = 0

/* STORY */

const story = [

"Hey…",

"I’ve been meaning to tell you something.",

"But every time I try to say it normally…",

"The words never seem to come out quite right.",

"So I thought maybe I could say it in a different way.",

"Something a little more thoughtful.",

"Something that feels a little more… me.",

"That’s why I made this small page.",

"Just to share a few thoughts with you.",

"Because ever since we started talking…",

"I’ve really enjoyed every moment of it.",

"Our conversations.",

"Your smile.",

"The way you make simple moments feel special.",

"And without even realizing it…",

"You slowly became someone very important to me.",

"Someone I look forward to talking to.",

"Someone who makes my day better.",

"And that made me realize something.",

"I don’t just like talking to you…",

"I really like you.",

"So instead of overthinking this…",

"I decided to just be honest.",

"So here it goes.",

"Oluwadamilola…"

]

let index = 0

/* START EXPERIENCE */

playBtn.addEventListener("click", () => {

player.src = playlist[songIndex]

player.play()

page1.classList.remove("active")
storyPage.classList.add("active")

storyText.innerText = story[index]

})

/* TAP STORY */

storyPage.addEventListener("click", () => {

index++

if(index < story.length){

storyText.innerText = story[index]

}else{

storyPage.classList.remove("active")
questionPage.classList.add("active")

}

})

/* PLAYLIST */

player.addEventListener("ended", () => {

songIndex++

if(songIndex < playlist.length){

player.src = playlist[songIndex]

player.play()

}

if(songIndex === playlist.length - 1){

player.loop = true

}

})

/* YES BUTTON */

yesBtn.addEventListener("click", () => {

questionPage.classList.remove("active")
yesPage.classList.add("active")

})

/* NO BUTTON RUN AWAY */

noBtn.addEventListener("mouseover", () => {

noBtn.style.position="absolute"

noBtn.style.top=Math.random()*80+"%"

noBtn.style.left=Math.random()*80+"%"

})