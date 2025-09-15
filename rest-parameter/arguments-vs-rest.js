// comparing arguments vs rest parameter.


function showArgs() {
    console.log(arguments); // not an array.
    
}

showArgs(1,2,3);

function showRest(...arg) {  // real array
    console.log(arg);
    
}
showRest(1,2,3);