window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    showStart();
}


function showStart() {
    console.log("show start");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").addEventListener("click", hideStart);
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

}

let point = 0;
let energy = 30;



function clickStar() {
    console.log("click star");
    if (this.classList.contains("sparkel")) {
        point += 1;
        console.log(point);
        this.classList.add("win");
    }
    if (this.classList.contains("evil")) {
        energy -= 10;
        console.log(energy);
        this.classList.add("fail");
    }

}
