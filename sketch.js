
function setup() {
    createCanvas(380, 380);

    var open = true;
    var close = false;
    var currentMouseY = 0;
}

// ========================================= //

function draw() {
        background(100);

    if (mouseIsPressed) {
        gestionClick();
}
    else {
        gestionNonClick();
}

}

// ========================================= //

function gestionClick() {

    if (mouseY < 20) {
        open = true;
    close = false;
    currentMouseY = mouseY;

    voletOpen();
}

    else if (mouseY > 360) {
        open = false;
    close = true;
    currentMouseY = mouseY;

    voletFermer();
}

    else {
        open = false;
    close = false;
    currentMouseY = mouseY;

    voletDeroulant(mouseY);
}
}

function gestionNonClick() {

    if (open) {
        voletOpen();
}
    else if (close) {
        voletFermer();
}
    else {
        voletDeroulant(currentMouseY);
}


}

// ========================================= //

function voletOpen() {
        // Volet stacked
        fill(255, 204, 0);
    noStroke();
    rect(10, 0, 340, 20);
    open = true;

    corde(80, 20);
}

function voletDeroulant(v) {
        v -= 20;
    for (let i = v; i >= 0; i = i - 30) {
        fill(255, 204, 0);
    noStroke();

    // quad(x1, y1,    x2,  y2,   x3, y3  ,    x4, y4)
    quad(10, i, 360, i, 370, i + 20, 20, i + 20)
}
}


function voletFermer() {
    for (let i = 0; i <= 380; i = i + 30) {
        fill(255, 204, 0);
    noStroke();
    rect(10, i, 360, 20);
}
}


// ========================================= //

function corde(v, yBezier) {
        x = (mouseX > 70) ? 70 : mouseX;

    fill(255, 255, 255)
    bezier(10, yBezier, 3, yBezier / 0.9, x / 0.9, v, x, v);

    fill(255, 0, 0)
    ellipse(x, v, 10)
}