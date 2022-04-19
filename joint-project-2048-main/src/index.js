const block2048 = document.getElementById('gamewindow1');
const Ticblock = document.getElementById(`gamewindow2`);

const styleSwap = [
    `x2`,
    `x4`,
    `x8`,
    `x16`,
    `x32`,
    `x64`,
    `x128`,
    `x256`,
    `x512`,
    `x1024`,
    `x2048`,
    `x4096`,
];

//      обработка первого блока с игрой 2048

let styleCount = 0;
function animation2048block() {
    setInterval(() => {
        colorswitch();
        styleCount = styleCount + 1;
        if (styleCount >= 12) styleCount = 0;
    }, 750);
}

const colorswitch = () => {
    block2048.classList.add(styleSwap[styleCount]);
    block2048.innerHTML = styleSwap[styleCount].slice(1);
    if (styleCount == 0) block2048.classList.remove(styleSwap[styleSwap.length - 1]); 
    else block2048.classList.remove(styleSwap[styleCount - 1]);
}

animation2048block();

//      обработка первого блока с игрой TicTack

let TicTackAnimationCount = 0;
Ticblock.style.backgroundColor = `white`;
Ticblock.style.color = 'red';
function xORo() {
    let conxORo = 0
    setInterval(() => {
        if (conxORo == 0) {
            Ticblock.innerHTML = `X`;
            conxORo = 1;
        } else {
            Ticblock.innerHTML = `O`;
            conxORo = 0;
        }
    }, 750);
}

xORo();


//      обработка канваса со змейкой

const canvastb = document.getElementById('snake'); 
const gtk = canvastb.getContext("2d");
gtk.fillStyle = "red";
let we = 40;
let he = 40;
let count = 0;
let safecord = [40 , 40];
function draw(we, he) {
    //if (he <= 320 && we <= 320) he += 10;
    //else if (he >= 320 && we <= 320) we += 10;
    //else if (he >= 50) he -= 10;
    //else if (he <= 320 && we >= 320) we -=10;
    //gtk.clearRect(0, 0, 400, 400);
    //gtk.fillRect( we, he, 35, 35);
    
    if (count == 0) {
        if (we == 320) count = 1;
        we += 10;
        console.log(we);
    } else if (count == 1) {
        if (he == 320) count = 2;
        he += 10;
    } else if (count == 2) {
        if (we == 40) count = 3;
        we -= 10;
    } else if (count == 3) {
        if (he == 40) count = 0;
        he -= 10;
    }
    gtk.fillRect( we, he, 35, 35);
    return [we, he];
}

setInterval(() => {
    gtk.clearRect(0, 0, 400, 400);
    safecord = draw(safecord[0], safecord[1]);
    console.log(safecord);
}, 20);

