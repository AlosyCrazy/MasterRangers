
 var canvas = new fabric.Canvas("myCanvas") ;
 var blockY=1;
 var blockX=1;

var blockImageWidth = 350;
var blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage, largura, altura)
{
	fabric.Image.fromURL(getImage, function(img){
		blockImageObject = img;
		blockImageObject.scaleToWidth(largura);
		blockImageObject.scaleToHeight(altura);
		blockImageObject.set({
		top: blockY,
		left:blockX
		});
		canvas.add(blockImageObject);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '69')
	{
		blockX=400;
		newImage('rr1.png', 300, 350);
		console.log("red");
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		newImage('gr.png', 300, 350);
		console.log("verde");
	}
	
	if(keyPressed == '65')
	{
		blockX =600;
		newImage('yr.png', 300, 350);
		console.log("amarelo");
	}
	if(keyPressed == '82')
	{
		blockX = 0;
		newImage('pr.png', 250, 300);
		console.log("rosa");
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		blockY = 50;
		newImage('br.png', 250, 300);
		console.log("azul");
	}
	
}

