
let x = document.getElementById("myBtn");

x.addEventListener("mouseover", mouseOverFunction);
x.addEventListener("click", clickFunction);
x.addEventListener("mouseout", function () {
    document.getElementById("demo").innerHTML = "Moused out!<br>";
});

function mouseOverFunction() {
    document.getElementById("demo").innerHTML = "Moused over!<br>";
}

function clickFunction() {
    document.getElementById("demo").innerHTML = "Clicked!<br>";
}