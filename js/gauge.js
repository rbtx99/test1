<!-- http://www.w3schools.com/html/html5_canvas.asp -->

function gauge(id, pv)
{
	this.pv= pv;
	// http://stackoverflow.com/questions/11816431/how-to-add-a-html5-canvas-within-a-div
	this.canvas = document.createElement('canvas');
	div = document.getElementById(id); 
	this.canvas.id     = "CursorLayer";
	this.canvas.width  = div.offsetWidth;
	this.canvas.height = div.offsetWidth;
	this.canvas.style.zIndex   = 8;
	//this.canvas.style.position = "absolute";
	this.canvas.style.border   = "0px solid";
	div.appendChild(this.canvas);
	
	// Draw something
	this.draw();
}

gauge.prototype.draw = function()
{
	// For reference: http://techoctave.com/simulation/

	var ctx = this.canvas.getContext("2d");
	ctx.fillStyle = "#FF0000";
	//ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	//ctx.strokeStyle="#FFFF00";
	//ctx.lineWidth= 2;
	//var adj= ctx.lineWidth/2-1;
	//ctx.strokeRect(adj, adj, this.canvas.width-ctx.lineWidth+1, this.canvas.height-ctx.lineWidth+1);
	//ctx.moveTo(0, 0);
	//ctx.lineTo(this.canvas.width, this.canvas.height);
	//ctx.stroke();
	//ctx.moveTo(this.canvas.width, 0);
	//ctx.lineTo(0, this.canvas.height);
	//ctx.stroke();
	//ctx.beginPath();
	//ctx.arc(this.canvas.width/2, this.canvas.height/2, this.canvas.width*0.45, 0, 2*Math.PI);
	//ctx.stroke();
	
	//ctx.font = this.canvas.height*0.08 + "px Arial";
	//ctx.textAlign = 'center';
	//ctx.textBaseline="middle"; 
	//ctx.fillStyle = "#FFFF00";
	//ctx.fillText(this.pv, this.canvas.width/2, this.canvas.height*0.85);
	
//	var img = new Image();
//	img.src = "js/images/ASPD.png";
//	ctx.drawImage(img,10,10,50,50,10,10,50,50);
//	ctx.drawImage(img,10,10);
	//img.src = "js/dial.svg";
	
	var c= this.canvas;
	var img = new Image;
	img.onload = function(){
	  //ctx.drawImage(img,0,0); // Or at whatever offset you like
	  ctx.drawImage(img, 0, 0, img.width, img.height, 0,0, c.width, c.height);
	};
	img.src = "js/images/" + this.pv + ".png";
	
	
}
