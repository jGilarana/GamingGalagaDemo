
var board = document.getElementById('main-board')
var player = new Player(225, 750)




function Player(x, y) {
    var self = this
    this.x = x;
    this.y = y;
    this.direction = 0
    this.speed = 25
    this.sprite

    this.insertPlayer = function () {
        var newPlayer = document.createElement('div')
        newPlayer.setAttribute('id', 'player')
        newPlayer.style.left = this.x + 'px'
        newPlayer.style.top = this.y + 'px'
        this.sprite = newPlayer
        board.appendChild(this.sprite)
    }

    this.move = function () {
    var nextX = self.x + self.speed * self.direction   
        if (nextX >= 0 && nextX <= 450) {
            self.x = self.x + self.speed * self.direction
            self.sprite.style.left = self.x + 'px'
        }
        
    }
}



player.insertPlayer()



window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'a': player.direction = -1
            break;
        case 'd': player.direction = 1
            break;
    }
})

window.addEventListener('keyup', function() {

player.direction = 0

}) 


function start() {
    var timerId = setInterval(player.move, 30)
    var timerId2 = setInterval(createEnemy, 2000)
}

// function createEnemy () {
//     var xRandom = Math.floor(Math.random() * 10) * 50
//     var enemy = new Enemy(xRandom, 0, board)
//     enemy.insertEnemy()
// }
start()
