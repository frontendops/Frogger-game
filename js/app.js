//array holding all enemies
var allEnemies = [];
var score = [];

// Enemies our player must avoid with starting position and speed parameters
var Enemy = function (x, y, speed) {
    //where the enemies appear on screen
    this.x = x;
    this.y = y;
    //hitbox of sprite
    this.size = 70;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//if the enemy is still in game board run at speed in parameters
//else reset postion back to start
Enemy.prototype.update = function (dt) {

    if (this.x < 510) {
        this.x += this.speed * dt;
    } else {
        this.x = -110;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//each enemy and its attributes
let enemy = new Enemy(-110, 73, 480);
let enemy2 = new Enemy(-110, 156, 400);
let enemy3 = new Enemy(-110, 239, 310);

//put all created enemies inside of the array
allEnemies.push(enemy, enemy2, enemy3);


//player object
let Player = function () {
    this.x = 205;
    this.y = 405;
    this.size = 50;
    this.sprite = 'images/char-horn-girl.png';
};

let player = new Player();

//render player on board
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//function for directions inputs
Player.prototype.handleInput = function (direction) {
    switch (direction) {
        case 'left':
            if (this.x > 20) {
                this.x -= 100;
            }
            break;

        case 'right':
            if (this.x < 405) {
                this.x += 100;
            }
            break;

        case 'up':
            if (this.y > 20) {
                this.y -= 83;
            }
            break;

        case 'down':
            if (this.y < 400) {
                this.y += 83;
            }
            break;
    }

};

function roundWin() {
    setTimeout(function () {
        if (player.y <= 30) {
            player.x = 205;
            player.y = 405;

            score.push('10');
            updateScore();
        }
    }, 2000);

}


Player.prototype.update = function () {
    //if game is won run this function

    //if enemy hits player restart player
    for (let enemy of allEnemies) {
        if (enemy.y === this.y && (enemy.x + enemy.size > this.x && enemy.x < this.x + this.size)) {
            this.x = 205;
            this.y = 405;
        }
    }

    roundWin();

};

//if the lake is reached add 10 to the score
function updateScore() {
    for (var i = 0; i < score.length; i++) {
        $('.score').html(score.length * 10);
    }
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//Functionality for changing our character