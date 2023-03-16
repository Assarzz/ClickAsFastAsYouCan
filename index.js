
let mode = "blue";
const screen = document.getElementById("screen");
let underProgress = false;

let time1;


function click(){


    if (mode == "blue"){
        screen.style.backgroundColor = "red";
        mode = "red";
        // we set a timer until screen turns green
        time = 5+Math.random()*5;
        console.log(time);

        if (underProgress == false){
            underProgress = true;
            window.setTimeout(afterTimeWait, time*1000);
        }
    }
    else if (mode == "red"){

        screen.style.backgroundColor =  "rgb(0, 125, 179)";
        mode = "blue";
        screen.innerHTML = "wait for screen to turn green";

    }
    else if (mode== "green"){
        screen.style.backgroundColor = "rgb(0, 125, 179)";
        mode = "blue";
        const duration = Date.now()- time1;
        console.log(duration);
        toString(duration)
        screen.innerHTML = "you pressed in "+ duration +" milliseconds";
    }


}



function afterTimeWait(){

    underProgress = false;
        // we can go ahead and run 
    console.log("we can go ahead and change bg to green");
    screen.style.backgroundColor = "green";
    mode = "green";
    time1 = Date.now();
}


function test(){
    console.log("test");
}
screen.addEventListener("keydown", click );