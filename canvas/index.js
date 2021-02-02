const myCanvas = document.getElementById('my-canvas')
const ctx = myCanvas.getContext('2d')
let canvasWidth = window.innerWidth
let canvasHeight = window.innerHeight
myCanvas.width = canvasWidth
myCanvas.height = canvasHeight
init()
window.onresize = function () {
    canvasWidth = window.innerWidth
    canvasHeight = window.innerHeight
    myCanvas.width = canvasWidth
    myCanvas.height = canvasHeight
    this.init()
}

function init() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.color = '#000'
    ctx.moveTo(0, canvasHeight - 200)
    ctx.lineTo(canvasWidth, canvasHeight - 200)
    ctx.stroke()
    ctx.closePath()
    drawArc(50, canvasHeight - 200 - 50)
}

function drawArc(x, y) {
    ctx.color = '#fff'
    ctx.beginPath()
    ctx.arc(x, y, 50, 0, 2 * Math.PI, false)
    ctx.stroke()
    const radialGradient = ctx.createRadialGradient(x, y, 0, x, y, 52)
    radialGradient.addColorStop(0, '#fff')
    radialGradient.addColorStop(1, '#000')
    ctx.fillStyle = radialGradient
    ctx.fill()
}


