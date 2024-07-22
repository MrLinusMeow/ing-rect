// inspiration by https://codepen.io/svsdesigns/pen/pvmjPG

window.onload = function() {
	var pl = {
		x: 20,
		y: 25,
		w: 15,
		h: 13,
		color: "#F9DC5C"
	}

	var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		function drawRect(x, y, w, h){
			ctx.fillStyle = pl.color;
			ctx.fillRect(x, y, w, h);
	}

	drawRect(pl.x, pl.y, pl.w, pl.h);
	let step = 10;
	document.getElementById("up").onclick = function () {
		pl.y -= step;
		ctx.clearRect(0, 0, 500, 500);
		drawRect(pl.x, pl.y, pl.w, pl.h);
		console.log("up");
	}
	document.getElementById("down").onclick = function () {
		pl.y += step;
		ctx.clearRect(0, 0, 500, 500);
		drawRect(pl.x, pl.y, pl.w, pl.h);
		console.log("down");
	}
	document.getElementById("left").onclick = function () {
		pl.x -= step;
		ctx.clearRect(0, 0, 500, 500);
		drawRect(pl.x, pl.y, pl.w, pl.h);
		console.log("left");
	}
	document.getElementById("right").onclick = function () {
		pl.x += step;
		ctx.clearRect(0, 0, 500, 500);
		drawRect(pl.x, pl.y, pl.w, pl.h);
		console.log("right");
	}
}
