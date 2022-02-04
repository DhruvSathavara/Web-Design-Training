
var y = 0;
function getinput(i) {
    var x = i;
    if (x === "c")
        document.getElementById("input").value = "";

    else if (x === "+" || x === "-" || x === "*" || x === "/"){
        if (y === 0) {
            document.getElementById("input").value += i;
            y = 1;
        }
    }    
    else if (x === "=")
            document.getElementById("input").value = eval(document.getElementById("input").value)
    else {
            document.getElementById("input").value += i;
            y = 0;
        }

}