let test1 = document.querySelector("h2")
test1.className = "klasa";
let test2 = document.querySelector("p");
test2.className = "klasa";


let cssList = document.querySelectorAll(".klasa");
for (let i = 0; i < cssList.length; i++) {
  cssList[i].style.color = "blue";
  cssList[i].style.backgroundColor = "pink";
  cssList[i].style.fontSize = "40px";
}


function zmiana() {
    let test1 = document.querySelector("h2");
    test1.className = "klasa";

    let test2 = document.querySelector("p");
    test2.className = "klasa";

    let cssList = document.querySelectorAll(".klasa");

    for (let i = 0; i < cssList.length; i++) {
        cssList[i].style.color = "green";
        cssList[i].style.fontSize = "40px";
        cssList[i].style.border =  "3px solid blue";
        cssList[i].style.height= "50px";
        cssList[i].style.backgroundColor = "yellow";
    }
}