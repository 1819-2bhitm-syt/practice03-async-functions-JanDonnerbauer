/*let tickTack = function(){
    console.log("tick");
};

let timer = setInterval(tickTack, 1000);*/

let logTick = true;

let tickTack = function () {
    if(logTick) {
        console.log("tick");
    }else {
        console.log("tack");
    }

    logTick = !logTick;
};

let timer = setInterval(tickTack, 1000);