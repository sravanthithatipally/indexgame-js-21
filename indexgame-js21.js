let numbers = [17, 31, 77, 20, 63];
let userinputele = document.getElementById("userInput");
let spanele = document.getElementById("indexOfNumber");

function togetindex(value) {
    let index = numbers.findIndex(function(eachitem) {
        if (eachitem === value) {
            return true;
        } else {
            return false;
        }
    });
    return index;
}

function findIndexOfNumber() {
    let userenteredval = userinputele.value;
    if (userenteredval === "") {
        alert("enter a number")
    } else {
        let value = parseInt(userenteredval);
        let indexofval = togetindex(value);
        spanele.textContent = indexofval;
    }
}