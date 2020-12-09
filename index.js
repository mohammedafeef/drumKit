let allDrumsFields = document.getElementsByClassName("drum");
const playTheMusic =(musiclink) =>{
    let music = new Audio(musiclink);
    music.play()
}
const doTheAnimation = (button) =>{
    button.classList.add("blur");
    setTimeout(()=>{
        button.classList.remove("blur");
    },200)
}
for(let i=1; i<=allDrumsFields.length; ++i){
    allDrumsFields[i-1].style.backgroundImage = `url("./images/tom${i}.png")`;
    allDrumsFields[i-1].addEventListener("click",() =>{
        playTheMusic(`./sounds/tom-${i}.mp3`);
        doTheAnimation(allDrumsFields[i-1]);
});
}
document.addEventListener("keydown",(event) =>{playMusicByKeyPress(event)});
const playMusicByKeyPress = (event) =>{
    const keyForMusic ={
        "w":1,
        "a":2,
        "s":3,
        "d":4,
        "j":5,
        "k":6,
        "l":7
    }
    let clickedLetter = event.key.toLowerCase()
    if (clickedLetter in keyForMusic) {null}else{return}
    const currentDocument = document.querySelector(`.${clickedLetter}`);
    doTheAnimation(currentDocument);
    let clickedKey = keyForMusic[clickedLetter];
    let MusicLinkToKey =`./sounds/tom-${clickedKey}.mp3`;

    playTheMusic(MusicLinkToKey);
}