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

function newItem(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);

    if(inputValue === ""){
        alert("please write something!");
    } else {
        document.getElementById("item").appendChild(li);
    }
    document.getElementById("input").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        };
    }
};



