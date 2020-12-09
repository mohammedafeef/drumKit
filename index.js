const allDrumsFields = document.getElementsByClassName("drum");
let counter = 1;
allDrumsFields.map((drum) =>{
    drum.style.backgroundImage = url(`./images/tom${counter}.png`)
    let music = new Audio(`./sounds/tom-${counter}.mp3`)
    drum.addEventListneres("click",playTheMusic(music));
})
const playTheMusic =(soundToPlay) =>{
    soundToPlay.play()
}