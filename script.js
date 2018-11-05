window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    hideToWin();
}

function hideToWin() {
    console.log("hide to win");
    document.querySelector("#towin").classList.add("hide");
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
    document.querySelector("#Star3").addEventListener("click", clickNoStar);
    document.querySelector("#Star4").addEventListener("click", clickStar);
    document.querySelector("#Star5").addEventListener("click", clickStar);
    document.querySelector("#Star6").addEventListener("click", clickStar);
    document.querySelector("#Star7").addEventListener("click", clickNoStar);
    document.querySelector("#Star8").addEventListener("click", clickStar);
    document.querySelector("#Star9").addEventListener("click", clickStar);
    document.querySelector("#Star0").addEventListener("click", clickNoStar);

}

let point = 0;
let time = 70;

if (time > 70) {
    console.log("click star");
    time += 0;
    console.log(time);
}

function clickStar() {
    console.log("click star");
    point += 1;
    time += 10;
    console.log(point);
    console.log(time);
    this.classList.add("win");
    this.removeEventListener("click", clickStar);
}

function clickNoStar() {
    console.log("click no star");
    time -= 24;
    console.log(time);
    this.classList.add("fail");
}
