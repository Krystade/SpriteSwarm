class Sprite {
	constructor(x, y, speed, animation) {
		this.speed = speed
		this.animation = animation
		this.frame = int(random(0,3))
		this.x = x
		this.randX = random(0,1)
		this.y = y
		this.randY = random(0,1)
		this.dir = 1
	}
	
	update(){
		this.display()
		this.move()
		this.frame++
	}
	
	display(){
		if(this.dir == 1){
		   image(this.animation[int(this.frame/this.speed) % 3], this.x, this.y)
		}else{
			image(this.animation[int(this.frame/this.speed) % 3 + 4], this.x, this.y)
		}
	}
	
	move(){
		if (keyIsDown(UP_ARROW)){
			this.y -= 4 + this.randY
		}else if (keyIsDown(DOWN_ARROW)) {
			this.y += 4 + this.randY
		}
		if (keyIsDown(LEFT_ARROW)){
			this.x -= 4 + this.randX
			this.dir = -1
		}else if (keyIsDown(RIGHT_ARROW)) {
			this.x += 4 + this.randX
			this.dir = 1
		}
	}
}