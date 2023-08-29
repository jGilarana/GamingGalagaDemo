var enemy1 = newEnemy(50, 20, board)

function Enemy(x, y, board) {
    var self = this
    this.x = x
    this.y = y
    this.speed = 50
    this.sprite

    this.insertEnemy = function () {
        var newEnemy = document.createElement('div')
        newEnemy.classList.add('enemy')
        newPlayer.style.left = this.x + 'px'
        newPlayer.style.top = this.y + 'px'
        this.sprite = newEnemy
        board.appendChild(this.sprite)
    }

    this.move = function () {
        self.y = self.y + self.speed * self.direction
        self.sprite.style.top = self.y + 'px'
    }
    this.timerid = setInterval(this.move, 100)

    this.removeEnemy = function () {
        board.removeChild(this.sprite)
        clearInterval(this.timerId)
    }

}



export { Enemy }

