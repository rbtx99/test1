<!-- http://www.w3schools.com/html/html5_canvas.asp -->

function gauge(id, pv)
{
	this.pv= pv;
	// http://stackoverflow.com/questions/11816431/how-to-add-a-html5-canvas-within-a-div
	this.canvas = document.createElement('canvas');
	div = document.getElementById(id); 
	this.canvas.id     = "CursorLayer";
	this.canvas.width  = div.offsetHeight;
	this.canvas.height = div.offsetHeight;
	this.canvas.style.zIndex   = 8;
	//this.canvas.style.position = "absolute";
	this.canvas.style.border   = "0px solid";
	div.appendChild(this.canvas);
	
	// Draw something
	this.draw();
}

gauge.prototype.draw = function()
{
	var ctx = this.canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
	//ctx.fillRect(0, 0, this.canvas.width, this.canvas.width);
	ctx.strokeStyle="#FFFF00";
	ctx.lineWidth= 4;
	var adj= ctx.lineWidth/2-1;
	ctx.strokeRect(adj, adj, this.canvas.width-ctx.lineWidth+1, this.canvas.height-ctx.lineWidth+1);
	//ctx.moveTo(0, 0);
	//ctx.lineTo(this.canvas.width, this.canvas.height);
	//ctx.stroke();
	//ctx.moveTo(this.canvas.width, 0);
	//ctx.lineTo(0, this.canvas.height);
	//ctx.stroke();
	ctx.beginPath();
	ctx.arc(this.canvas.width/2, this.canvas.height/2, this.canvas.width*0.45, 0, 2*Math.PI);
	ctx.stroke();
	
	ctx.font = this.canvas.height*0.08 + "px Arial";
	ctx.textAlign = 'center';
	ctx.textBaseline="middle"; 
	ctx.fillStyle = "#FFFF00";
	ctx.fillText(this.pv, this.canvas.width/2, this.canvas.height*0.85);
	
	var img = new Image();
	img.src = "js/face.png";
	ctx.drawImage(img,10,10,50,50,10,10,50,50);
	//img.src = "js/dial.svg";
	
}	


	/*
	// Deaw
	
	var c = document.getElementById(canvas);
	var ctx = c.getContext("2d");
	//var ctx = canvas.getContext("2d");
		
	ctx.canvas.width  = 300; //window.innerWidth;
	ctx.canvas.height = 200; //window.innerHeight;
	
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(0,0,150,75);	

	ctx.moveTo(0,0);
	ctx.lineTo(200,100);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();

	ctx.font = "30px Arial";
	ctx.fillStyle = "#00FF00";
	ctx.fillText("Hello World",10,50);

	ctx.font = "30px Arial";
	ctx.strokeText("Hello World",10,90);
	*/
	





/*

<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>

<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);

ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

ctx.font = "30px Arial";
ctx.fillStyle = "#00FF00";
ctx.fillText("Hello World",10,50);

ctx.font = "30px Arial";
ctx.strokeText("Hello World",10,90);

</script>

*/


