let playerImage;
let obstacleImage;

function preload() {

    playerImage = loadImage('player_image.jpeg');
    obstacleImage = loadImage('obstacle_image.jpeg');
}

function setup() {
    createCanvas(800, 700);

 
    player = new Character(50, 50, playerImage);
    obstacle = new Character(200, 200, obstacleImage);
}

function draw() {
    background(0);

    player.display();
    obstacle.display();
}

class Character {
    constructor(x, y, image) {
        this.x = x;
        this.y = y;
        this.image = image;
    }

    display() {
        image(this.image, this.x, this.y, 50, 50);
    }
}
