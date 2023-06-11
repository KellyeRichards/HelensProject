// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");

// ctx.fillStyle = "#FFF7AE";
// ctx.fillRect(50, 50, 100, 100);

// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, 2*Math.PI);
// ctx.fillStyle = "#48284A";
// ctx.fill();

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 50;
let y = 50;
let width = 50;
let height = 50;

function draw() {
ctx.clearRect (0, 0, canvas.width, canvas.height);
ctx.fillStyle= "#3C787E";
ctx.fillRect(x, y, width, height);

}
function move () {
x += 5;
y += 5;
if (x> canvas.width - width || y> canvas.height - height){
x=50;
y=50;}
draw ();
setTimeout (move, 50);


}


move();
