
let mode = "blue";
const screen = document.getElementById("screen");
const msg = document.getElementById("msg");
let underProgress = false;

let time1;


function click(){


    if (mode == "blue"){
        screen.style.backgroundColor = "red";
        mode = "red";
        msg.innerHTML = "Press as fast as you can when screen turns green!";
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
        msg.innerHTML = "You pressed to early :(";

    }
    else if (mode== "green"){
        screen.style.backgroundColor = "rgb(0, 125, 179)";
        mode = "blue";
        const duration = Date.now()- time1;
        console.log(duration);
        toString(duration)
        msg.innerHTML = "You pressed in "+ duration +" milliseconds";
    }


}



function afterTimeWait(){

    underProgress = false;
        // we can go ahead and run 
    console.log("we can go ahead and change bg to green");
    screen.style.backgroundColor = "green";
    msg.innerHTML = "Click!"
    mode = "green";
    time1 = Date.now();
}


function test(){
    console.log("test");
}
screen.addEventListener("keydown", click );