let audio = document.querySelector(".audio");

let volumeUp = document.querySelector(".volume-up");

volumeUp.addEventListener("click", () => { audio.volume += 0.2;});

let volumeDown = document.querySelector(".volume-down");

volumeDown.addEventListener("click", () => { audio.volume += 0.2;});

let playPause = document.querySelector(".play-pause");

playPause.onclick = function() {
    audio.play();
    console.log("success");

}

