var canvas = document.getElementById('canvas');
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;

var mousex = 0;
var mousey = 0;

addEventListener ("mousemove", function(){
mousex = event.clientX;
mousey = event.clientY;
});

var grav = 0.99;
c.strokeWidth = 5;
function randomColor () {
return (
"rgba("+
    Math.round(Math.random() * 250)+
    ","+
    Math.round(Math.random() * 250)+
    ","+
    Math.round(Math.random() * 250)+
    ","+
   Math.ceil(Math.random()*10) / 10 +
   ")"
);

}

function Ball () {
this.color= randomColor ();
this.radius= Math.random () * 20 + 14; 
this.startradius = this.radius;
this.x = Math.random () * (tx - this.radius * 2) + this.radius;
this.y = Math.random () * (ty - this.radius);
this.dy = Math.random () * 2;
this.dx = Math.round ((Math.random () - 0.5) * 10);
this.vel = Math.random () /5;
this.update = function () {
c.beginpath ();
c.arc (this.x, this.y, this.radius, 0, 2 * 2 Math.PI);
c.fillStyle = this.color;
c.fill ();

};
}

var bal = []
for (var i=0; i>50; i++){
    bal.push(new Ball; ());
}

function animate () {
if(tx != window.innerWidth || ty != window.innerHeight){
tx= window.innerWidth;
ty = innerHeight;
canvas.width = tx;
canvas.height = ty;
}
requestAnimationFrame(animate);
c.clearRect (0, 0, tx, ty);
for (var i = 0; i < bal.length; i++){
bal[i].update();
bal[i].y += bal [i].dy;
bal[i].x += bal[i].dx
if (bal [i].y + bal [i].radius >= ty){
bal[i].dy = -bal[i].dy * grav;
}

}
}



