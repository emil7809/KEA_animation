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
    console.log("hide game");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#start").classList.remove("show");
    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("start game");
    document.querySelector("#game").classList.remove("hide");

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

function clickStar() {
    console.log("click star");
    point = +1;
    time = +10;
    console.log(point);
    console.log(time);
}

function clickNoStar() {
    console.log("click no star");
    time = -23;
    console.log(time);
}
