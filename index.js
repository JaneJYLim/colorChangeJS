
var colorChange;

window.addEventListener("resize", doneResizing) 
colorChange = window.setTimeout(doneResizing, 10);

function doneResizing() {

    clearTimeout(colorChange);
    console.log(window.innerWidth);
    
    if (window.innerWidth >= 800 && window.innerWidth <= 1200) {
        document.querySelector("h1").innerHTML = ":) <br><br> hotpink";
        document.body.style.backgroundColor = "hotpink";
    } else if (window.innerWidth > 1200 && window.innerWidth <=1600) {
        document.body.style.backgroundColor = "orange";
        document.querySelector("h1").innerHTML = ":D <br><br> Orange";
    } else if (window.innerWidth > 1600) {
        document.body.style.backgroundColor = "lightgreen";
        document.querySelector("h1").innerHTML = ":P <br><br> lightgreen";
    } else {
        document.body.style.backgroundColor = "dodgerblue";
        document.querySelector("h1").innerHTML = ":( <br><br> Blue";
    }
}