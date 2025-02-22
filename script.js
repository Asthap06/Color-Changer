function bgchange(color) {
    let colorarray = ["#f7dc6f","#d1c4e9","#ffc0cb","#8bc34a","#6c5ce7"];
    document.body.style.background = colorarray[color];
}

var colorarray = ["#f7dc6f","#d1c4e9","#ffc0cb","#8bc34a","#6c5ce7"];
var colorbox = document.getElementById("colorbox");

colorarray.forEach(function (color, index) {
    let span = document.createElement("span");
    span.style.backgroundColor = color;
    span.addEventListener("click", function () {
        bgchange(index);
    });
    colorbox.appendChild(span);
});
