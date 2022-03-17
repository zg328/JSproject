let number = parseInt(document.getElementById("twn").innerText);
function wtc() {
    number += 1;
    document.getElementById("twn").innerText = parseInt(number);
    console.log(number);
}