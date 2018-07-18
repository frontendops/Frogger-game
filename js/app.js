var allEnemies = [];

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    if (this.x < 400) {
        this.x += this.speed * dt;
    } else {
        this.x = -110;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let enemy = new Enemy(-110,60,60);
let enemy2 = new Enemy(-110,140,50);
let enemy3 = new Enemy(-110,220,50);


allEnemies.push(enemy,enemy2,enemy3);



let Player = function() {
    this.x = 205;
    this.y = 405;
    this.speed = 50;
    this.sprite = 'images/char-horn-girl.png';
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    switch (direction) {
        case 'left':
        if (this.x > 20) {
            this.x -= 100;
        }
        break;

        case 'right':
        if (this.x  < 405) {
            this.x += 100;
        }
        break;

        case 'up':
        if (this.y > 20) {
            this.y -= 83;
        }
        break;

        case 'down':
        if (this.y  < 400) {
            this.y += 83;
        }
        break;
    }

};

let player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
