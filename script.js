window.addEventListener("load", sidenVises);

let showSettingsEffektSound = true;
let showSettingsMusic = true;

function sidenVises() {
    console.log("siden vises");
    showStart();
}


function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#settings").addEventListener("click", showSettings);
}

function hideStart() {
    console.log("hide start");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#start").addEventListener("animationend", showToWin);
}

function showToWin() {
    console.log("show to win");
    document.querySelector("#towin").classList.add("fade_in");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#towin").classList.remove("hide");
    document.querySelector("#towin").addEventListener("click", startGame);
}

function startGame() {
    console.log("start game");
    document.querySelector("#towin").classList.add("hide");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#penguin2").classList.add("drifter");
    document.querySelector("#Star1").addEventListener("click", clickStar);
    document.querySelector("#Star2").addEventListener("click", clickStar);
    document.querySelector("#Star3").addEventListener("click", clickStar);
    document.querySelector("#Star4").addEventListener("click", clickStar);
    document.querySelector("#Star5").addEventListener("click", clickStar);
    document.querySelector("#Star6").addEventListener("click", clickStar);
    document.querySelector("#Star7").addEventListener("click", clickStar);
    document.querySelector("#Star8").addEventListener("click", clickStar);
    document.querySelector("#Star9").addEventListener("click", clickStar);
    document.querySelector("#Star0").addEventListener("click", clickStar);
    document.querySelector("#settings").addEventListener("click", showSettings);

}

//STAR STUFF********************************************************

let point = 0;
let energy = 30;



function clickStar() {
    console.log("click star");
    if (this.classList.contains("sparkel")) {
        point += 1;
        console.log(point);
        this.classList.add("win");
        if (point == 7) {
            document.querySelector("#levelcomplete").classList.remove("hide");
        }
    }
    if (this.classList.contains("evil")) {
        energy -= 10;
        console.log(energy);
        this.classList.add("fail");
    }
    if (energy == 0) {
        document.querySelector("#gameover").classList.remove("hide");
        document.querySelector("#replay").addEventListener("click", sidenVises);
    }
}

//STAR STUFF********************************************************

//SETTINGS********************************************************

function showSettings() {
    console.log("Show Settings");
    document.querySelector("#settings_screen").classList.remove("hide");
    document.querySelector("#setting_close").addEventListener("click", hideSettings);
    document.querySelector("#sfx").addEventListener("click", toggleSounds);
    document.querySelector("#music").addEventListener("click", toggleMusic);
}


function hideSettings() {
    console.log("hide settings");
    document.querySelector("#settings_screen").classList.toggle("hide");

}


function toggleSounds() {
    console.log("toggle sounds");

    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;
        soundsOff();
    } else {
        showSettingsEffektSound = true;
        soundsOn();
    }
}

function soundsOff() {
    console.log("sound off");
    document.querySelector("#sfx").classList.add("sfxoff");
}


function soundsOn() {
    console.log("sound on");
    document.querySelector("#sfx").classList.add("sfxon");
}

function toggleMusic() {
    console.log("toggle music");

    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        musicOff();
    } else {
        showSettingsMusic = true;
        musicOn();
    }
}

function musicOff() {
    console.log("music off");
    document.querySelector("#music").classList.add("musicoff");
}


function musicOn() {
    console.log("music on");
    document.querySelector("#music").classList.add("musicon");
}

//SETTINGS********************************************************
