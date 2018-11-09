window.addEventListener("load", sidenVises);

let showSettingsEffektSound = true;
let showSettingsMusic = true;

let point;
let energy;

let gameStatus;

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
    document.querySelector("#myMusic").play();
    document.querySelector("#push").currentTime = 0;
    document.querySelector("#push").play();
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#start").addEventListener("animationend", showToWin);
}

function showToWin() {
    console.log("show to win");

    //restart point/energy
    energy = 30;
    point = 0;

    //restart energi sprite
    document.querySelector("#energy_bar_sprite").classList.remove("ONELifeAni");
    document.querySelector("#energy_bar_sprite").classList.remove("TWOLifeAni");
    document.querySelector("#energy_bar_sprite").classList.remove("THREELifeAni");

    //restart point
    document.querySelector("#point_bar_sprite").classList.remove("ONEPointsAni");
    document.querySelector("#point_bar_sprite").classList.remove("TWOPointsAni");
    document.querySelector("#point_bar_sprite").classList.remove("THREEPointsAni");
    document.querySelector("#point_bar_sprite").classList.remove("FOURPointsAni");
    document.querySelector("#point_bar_sprite").classList.remove("FIVEPointsAni");
    document.querySelector("#point_bar_sprite").classList.remove("SIXPointsAni");
    document.querySelector("#point_bar_sprite").classList.remove("SEVENPointsAni");

    document.querySelector("#towin").classList.add("fade_in");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#towin").classList.remove("hide");
    document.querySelector("#towin").addEventListener("click", startGame);


}

function startGame() {
    console.log("start game");
    document.querySelector("#push").currentTime = 0;
    document.querySelector("#push").play();
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

    setTimeout(gameOver, 10000);
}

//STAR STUFF********************************************************




function clickStar() {
    console.log("click star");
    if (this.classList.contains("sparkel")) {
        this.removeEventListener("click", clickStar);
        document.querySelector("#ping").play();
        document.querySelector("#ping").currentTime = 0;
        point += 1;
        console.log(point);
        this.classList.add("win");
    }

    if (point == 1) {
        document.querySelector("#point_bar_sprite").classList.add("ONEPointsAni");
    }

    if (point == 2) {
        document.querySelector("#point_bar_sprite").classList.add("TWOPointsAni");
    }

    if (point == 3) {
        document.querySelector("#point_bar_sprite").classList.add("THREEPointsAni");
    }

    if (point == 4) {
        document.querySelector("#point_bar_sprite").classList.add("FOURPointsAni");
    }

    if (point == 5) {
        document.querySelector("#point_bar_sprite").classList.add("FIVEPointsAni");
    }

    if (point == 6) {
        document.querySelector("#point_bar_sprite").classList.add("SIXPointsAni");
    }

    if (point == 7) {
        document.querySelector("#point_bar_sprite").classList.add("SEVENPointsAni");

        endGame();
    }

    if (this.classList.contains("evil")) {
        energy -= 10;
        console.log(energy);
        this.classList.add("fail");
        document.querySelector("#no").play();
        document.querySelector("#no").currentTime = 0;
    }

    if (energy == 20) {
        document.querySelector("#energy_bar_sprite").classList.add("ONELifeAni");

    }

    if (energy == 10) {
        document.querySelector("#energy_bar_sprite").classList.add("TWOLifeAni");

    }

    if (energy == 0) {
        document.querySelector("#energy_bar_sprite").classList.add("THREELifeAni");

        endGame();
    }
}

function endGame() {
    console.log("end game");


    if (energy == 0) {
        gameOver();
    }

    if (point == 7) {
        levelComplete();
    }
}

function gameOver() {
    console.log("Game over");
    if (gameStatus != "vundet") {
        document.querySelector("#gameover").classList.remove("hide");
        document.querySelector("#replay").addEventListener("click", replay);
        document.querySelector("#penguin2").classList.remove("drifter");
    }
}

function levelComplete() {
    console.log("you win");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#replay2").addEventListener("click", replay);
    document.querySelector("#penguin2").classList.remove("drifter");
    gameStatus = "vundet";
}

function replay() {
    console.log("replay");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#push").play();
    let arrStars = document.querySelectorAll(".star");
    arrStars.forEach(function (star) {
        console.log("loop");
        star.classList.remove("fail");
        star.classList.remove("win");
    });
    console.log(arrStars);
    //this.classList.remove("fail");
    showToWin();
}

//STAR STUFF********************************************************

//SETTINGS********************************************************

function showSettings() {
    console.log("Show Settings");
    document.querySelector("#push").currentTime = 0;
    document.querySelector("#push").play();
    document.querySelector("#settings_screen").classList.remove("hide");
    document.querySelector("#setting_close").addEventListener("click", hideSettings);
    document.querySelector("#sfx").addEventListener("click", toggleSounds);
    document.querySelector("#music").addEventListener("click", toggleMusic);
}

function hideSettings() {
    console.log("hide settings");
    document.querySelector("#push").currentTime = 0;
    document.querySelector("#push").play();
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
    document.querySelector("#push").muted = true;
    document.querySelector("#ping").muted = true;
    document.querySelector("#no").muted = true;


}


function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);

    document.querySelector("#sfx_sprite").removeEventListener('animationend', soundsOn);
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");

    //    her tændes for efx
    document.querySelector("#push").muted = false;
    document.querySelector("#ping").muted = false;
    document.querySelector("#no").muted = false;
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
    document.querySelector("#myMusic").pause();

}


function musicOn() {
    console.log("musicOn function værdi er" + showSettingsMusic);

    document.querySelector("#music_sprite").removeEventListener('animationend', musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");

    //    her tændes for musikken
    document.querySelector("#myMusic").play();

}

//SETTINGS********************************************************
