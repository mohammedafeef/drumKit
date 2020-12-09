let allDrumsFields = document.getElementsByClassName("drum");
const playTheMusic =(musiclink) =>{
    let music = new Audio(musiclink);
    music.play()
}
for(let i=1; i<=allDrumsFields.length; ++i){
    allDrumsFields[i-1].style.backgroundImage = `url("./images/tom${i}.png")`;
    allDrumsFields[i-1].addEventListener("click",() =>{playTheMusic(`./sounds/tom-${i}.mp3`)});
}
