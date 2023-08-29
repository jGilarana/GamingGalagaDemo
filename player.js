function Player(x, y, board) {
    var self = this
    this.x = x;
    this.y = y;
    this.direction = 0
    this.speed = 50
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
        self.x = self.x + self.speed * self.direction
        self.sprite.style.left = self.x + 'px'
    }
}

export { Player }