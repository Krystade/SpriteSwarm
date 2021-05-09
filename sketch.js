let swarm = []
let animationFlipped = []
let spriteW = 28
let spriteH = 24

let click = 0
let happy = []
let mad = []
let raging = []

function preload() {
	spritesheet = loadImage('BeeSheet.png')
	spritesheetFlipped = loadImage('BeeSheetFlipped.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	let frames = 4
	
	//Filling happy array with happy sprites
	for(var i = 0; i < 4; i++){
		happy.push(spritesheet.get(i * spriteW, 0, spriteW, spriteH))
	}
	for(var i = 0; i < 4; i++){
		happy.push(spritesheetFlipped.get(i * spriteW, 0, spriteW, spriteH))
	}
	//Filling mad array with mad sprites
	for(var i = 0; i < 4; i++){
		mad.push(spritesheet.get(i * spriteW, spriteH, spriteW, spriteH))
	}
	for(var i = 0; i < 4; i++){
		mad.push(spritesheetFlipped.get(i * spriteW, spriteH, spriteW, spriteH))
	}	
	//Filling raging array with raging sprites
	for(var i = 0; i < 4; i++){
		raging.push(spritesheet.get(i * spriteW, 2 * spriteH, spriteW, spriteH))
	}
	for(var i = 0; i < 4; i++){
		raging.push(spritesheetFlipped.get(i * spriteW, 2 * spriteH, spriteW, spriteH))
	}
	
	//generate a starting swarm
	createSwarm(0)
	

}

function draw() {
	background(45, 165, 220)
	//loop through each bee and update them, stepping forward one fram of their
	//animation and moving them if an arrow key is pressed
	for(var i = 0; i < swarm.length; i++){
		swarm[i].update()
	}
	
	//Write the instructions over everything else
	textSize(32)
	text("Left-click to create a different swarm.", 30, 30)
	text("Use the arrow keys to move.", 30, 70)
}

//If the user clicks, generate a new swarm with the next temper and remove the current one
function mouseClicked() {
	//Empty the swarm
	swarm = []
	//Increment click and use that to decide the temper of the new swarm
	click++
	createSwarm(click%3)
}

function createSwarm(temper){
	var temper = temper
	//Making a swarm
	for(var i = 0; i < 100; i++){
		//Depending on how many times the user has clicked, create the appropriate tempered swarm
		if(temper == 0){
			//Happy swarm
			swarm.push(new Sprite(windowWidth/2 + int(random(-150, 150)), windowHeight/2 + int(random(-150, 150)), int(random(2, 6)), happy))
		}else if(temper == 1){
			//Mad swarm
			swarm.push(new Sprite(windowWidth/2 + int(random(-150, 150)), windowHeight/2 + int(random(-150, 150)), int(random(2, 6)), mad))
		}else if(temper == 2){
			//Raging swarm
			swarm.push(new Sprite(windowWidth/2 + int(random(-150, 150)), windowHeight/2 + int(random(-150, 150)), int(random(2, 6)), raging))
		}
	}
}