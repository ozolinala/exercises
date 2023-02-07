"use strict";

let iterator = 0;
let maxNumberOfIterations;
initLoop();
 
function initLoop(){
    console.log("initLoop");
    maxNumberOfIterations = 11;
    loop();
}

function loop (){
    console.log("loop", iterator);
    iterator++;
if (iterator <= maxNumberOfIterations){
 setTimeout(loop, 200); 
}
}