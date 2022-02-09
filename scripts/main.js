const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");

class Player {
    constructor() {
        this.position = {
            x: 50,
            y: 270
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 80
        this.height = 80
    }
    
    draw() {
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
    }
}

const player = new Player()

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
}

