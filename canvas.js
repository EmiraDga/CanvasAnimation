 var canvas = document.querySelector("canvas")


 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 var c = canvas.getContext("2d")

 /*
 c.fillStyle = "#D2B48C"
 c.fillRect(100, 100, 100, 100);
 c.fillStyle = "#F4A460"
 c.fillRect(400, 200, 100, 100);

 c.fillStyle = "#D8BFD8"

 c.fillRect(600, 600, 100, 100);
 c.fillStyle = "#98FB98"

 c.fillRect(900, 500, 100, 100);

 c.beginPath();
 c.moveTo(50, 300);
 c.lineTo(300, 100);
 c.lineTo(400, 300);
 c.strokeStyle = "#A0522D"
 c.stroke();

*/


 /*
  for (var i = 0; i < 100; i++) {
      var x = Math.random() * window.innerWidth;

      var y = Math.random() * window.innerHeight;
      c.beginPath()
      c.arc(x, y, 30, 0, Math.PI * 2, false)
      c.strokeStyle = '#A52A2A';
      c.stroke();
  }
  console.log(canvas);
  
  */

 function Circle(x, y, dx, dy, radius) {
     this.x = x;
     this.y = y;
     this.dx = dx;
     this.dy = dy;
     this.radius = radius;

     this.draw = function() {
         c.beginPath();
         c.arc(this.x, this.y, 30, this.radius, 0, Math.PI * 2, false)
         c.strokeStyle = "blue";
         c.stroke();
     }

     this.update = function() {
         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
             this.dx = -this.dx;
         }
         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
             this.dy = -this.dy;
         }


         this.x += this.dx
         this.y += this.dy
     }

 }

 var circle = new Circle(200, 200, 3, 3, 30);
 var y = Math.random() * innerHeight;
 var x = Math.random() * innerWidth;
 var dx = (Math.random() + 0.5) * 8
 var radius = 30;
 var dy = (Math.random() + 0.5) * 8

 function animate() {
     requestAnimationFrame(animate);
     c.clearRect(0, 0, canvas.width, canvas.height);
     circle.draw()
     circle.update()


     c.beginPath();
     c.arc(x, y, 30, radius, 0, Math.PI * 2, false)
     c.strokeStyle = "blue";
     c.stroke();
     //
     if (x + radius > innerWidth || x - radius < 0) {
         dx = -dx;
     }
     if (y + radius > innerHeight || y - radius < 0) {
         dy = -dy;
     }


     x += dx
     y += dy
 }
 animate();