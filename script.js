window.addEventListener("load", sidenVises);

let showSettingsEffektSound = true;
let showSettingsMusic = true;


let point;
let energy;

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
    energy = 30;
    point = 0;
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
    setTimeout(gameOver, 60000);

}

//STAR STUFF********************************************************




function clickStar() {
    console.log("click star");
    if (this.classList.contains("sparkel")) {
        this.removeEventListener("click", clickStar);
        point += 1;
        console.log(point);
        this.classList.add("win");
        if (point == 7) {
            levelComplete();

        }
    }
    if (this.classList.contains("evil")) {
        energy -= 10;
        console.log(energy);
        this.classList.add("fail");
    }
    if (energy == 0) {
        gameOver();
    }
}

function gameOver() {
    console.log("Game over");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#replay").addEventListener("click", replay);
}

function levelComplete() {
    console.log("you win");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#replay2").addEventListener("click", replay);
}

function replay() {
    console.log("replay");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    showToWin();
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

    if (showSettingsEffektSound == false) {
        console.log("toggle sound off");
        showSettingsEffektSound = true;
        document.querySelector("#sfx_sprite").classList.add("off_on");
        document.querySelector("#sfx_sprite").classList.remove("off");
        document.querySelector("#sfx_sprite").addEventListener('animationend', soundsOn);
        // soundsOff();
    } else {
        showSettingsEffektSound = false;
        console.log("toggle sound on");
        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("on");
        document.querySelector("#sfx_sprite").addEventListener('animationend', soundsOff);
        //soundsOn();
    }
}

function soundsOff() {
    console.log("soundOff function værdi er" + showSettingsEffektSound);

    document.querySelector("#sfx_sprite").removeEventListener('animationend', soundsOff);
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");

    //    her slukkes for efx


}


function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);

    document.querySelector("#sfx_sprite").removeEventListener('animationend', soundsOn);
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");

    //    her tændes for efx

}

function toggleMusic() {
    console.log("toggleMusic");

    if (showSettingsMusic == false) {
        //Jeg slår lyden til
        console.log("toggle music on");
        showSettingsMusic = true;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener('animationend', musicOn);

    } else {
        showSettingsMusic = false;
        console.log("toggle music off");
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").addEventListener('animationend', musicOff);

    }
}

function musicOff() {
    console.log("musicOff function værdi er" + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener('animationend', musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

    //    her slukkes for musikken


}


function musicOn() {
    console.log("musicOn function værdi er" + showSettingsMusic);

    document.querySelector("#music_sprite").removeEventListener('animationend', musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");

    //    her tændes for musikken


}

//SETTINGS********************************************************
