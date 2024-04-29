function changeText() {
    var p = document.getElementById("demo");
    if (p.innerHTML === "Text changed!") {
        p.innerHTML = "This is a paragraph.";
    } else {
        p.innerHTML = "Text changed!";
    }
}
