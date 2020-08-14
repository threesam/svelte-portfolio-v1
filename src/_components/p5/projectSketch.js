const sketch = (p5) => {
    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight)
    }

    p5.draw = () => {
        p5.background(20)
        p5.stroke(15, 76, 129)
        p5.noFill()
        drawCircle(0, p5.windowHeight / 2, p5.windowHeight)
        p5.noLoop()
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    }

    function drawCircle(x, y, d) {
        p5.ellipse(x, y, d)
        if (x < p5.windowWidth + 100) {
            let newD = d * 0.99
            x += p5.random(20)
            drawCircle(x, y, newD)
        }
    }
}

export default sketch