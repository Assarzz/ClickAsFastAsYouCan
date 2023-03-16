
let mode = "blue";
const screen = document.getElementById("screen");

function click(){


    if (mode == "blue"){
        screen.style.backgroundColor = "red";
        mode = "red";
    }
    else if (mode == "red"){

        screen.style.backgroundColor =  "rgb(0, 125, 179)";
        mode = "blue";

    }
    else if (mode== "green"){
        screen.style.backgroundColor = "rgb(0, 125, 179)";
        mode = "blue";
    }

}

function test(){

    console.log("asgafafafsdesF");
}


screen.addEventListener("keydown", click );