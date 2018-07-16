// Enemies our player must avoid
var Enemy = function(h, w, speed) {
    // Variables applied to each of our instances go here,

    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    speed * dt;
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

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
            this.y -= 80;
        }
        break;

        case 'down':
        if (this.y  < 400) {
            this.y += 80;
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
