const canWidth = 1200;
const canHeight = 700;

let x = 0;
let y = 572;

let srcX;
let srcY;

const sheetWidth = 893;
const sheetHeight = 893;

const cols = 7;
const rows = 7;

let width = sheetWidth / cols;
let height = sheetHeight / rows;

let currentFrame = 0;

let character = new Image();
character.src = "sprites/digimon-agumon-sprites2.png";

let canvas = document.getElementById('canvas');
canvas.width = canWidth;
canvas.height = canHeight;
let ctx = canvas.getContext('2d');


function updateFrame() {

    currentFrame = ++currentFrame % cols;
    srcX = currentFrame * width;
    srcY = 0;

    ctx.clearRect(x, y, width, height);
};

function drawImage() {
    updateFrame();
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}

setInterval(function () {
    drawImage();
}, 500);