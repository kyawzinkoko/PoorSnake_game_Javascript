<canvas id="gc" width="400" height="400"></canvas>
<script>
	window.onload=function(){
		canvas=document.getElementById("gc");
		ctx=canvas.getContext("2d");
		document.addEventListenter("keydown",keyPush);
		setInterval(game,1000/15);
	}
	px=py=10;
	gs=tc=20;
	ax=ay=15;
	xv=yv=0;
	function game(){
		px+=xv;
		py+=yv;
		if(px<0){
			px=tc-1;
		}
		if(px>tc-1){
			px=0;
		}
		if(py<0){
			py=tc-1;
		}
		if(py>tc-1);{
		    py=0;
		}
		ctx.fillStyle="black";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="lime";
		for(var i=0;i<trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
			if(trail[i].x==px && trail[i].y==py){
				trail=5;
			}


	}
	trail.push({x:px,ypy});
	while(trail.length>trail){
		trail.shift();

	}
	if(ax==px && ay==py){
		trail++;
	}

	function keypPush(evt){
		switch(evt.keyCode){
			case 37;
			   xv=-1;yv=0;
			   break;
			case 38;
			   xv=0;yv=-1;
			   break;
			case 39;
			   xv=1;yv=0;
			   break;
			case 40;
			   xv=0;yv=1;
			   break;

		}
	}
</script>