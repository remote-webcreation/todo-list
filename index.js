let listBtn = document.getElementsByTagName("li");

let i;
for (i= 0; i<listBtn.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listBtn[i].appendChild(span);
};

let close = document.getElementsByClassName("close");


for (i=0; i<close.length; i++) {
    let i;
    close[i].onlick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}
let btn = document.querySelector("ul");
btn.addEventListener("click", function(ev) {
    if(ev.target.tagName === "li") {
        ev.target.classList.toggle("checked");
    }
}, false);



