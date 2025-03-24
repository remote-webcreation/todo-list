let listBtn = document.getElementsByTagName("li");

let i;
for (i= 0; i<listBtn.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listBtn[i].appendChild(span);
};

