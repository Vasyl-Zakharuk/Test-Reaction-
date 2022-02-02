let start = new Date().getTime();

let shape = document.getElementById("shape");

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    let width = (Math.random() * 200) + 100;

    if (Math.random() > 0.5) {
        shape.style.borderRadius = "50%";
    } else {
        shape.style.borderRadius = "0";
    }

    shape.style.backgroundColor = getRandomColor();
    shape.style.width = width + "px";
    shape.style.height = width + "px";
    shape.style.top = top + "px";
    shape.style.left = left + "px";

    shape.style.display = "block";
    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 3000);
}

appearAfterDelay();

shape.onclick = function () {
    shape.style.display = "none";

    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + "s";

    appearAfterDelay();

}