function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    characters.forEach(character => {
        character.update()
        character.draw(context)
    })
    window.requestAnimationFrame(draw)
}

function resize() {
    canvas.width = animatedBackgroundContainer.clientWidth
    canvas.height = animatedBackgroundContainer.clientHeight
}

function load() {
    resize()
    spawnCharacters(numCharacters)
    draw()
}

const animatedBackgroundContainer = document.querySelector(".anim-bg")
const animatedBackgroundCharacterImages = [...document.querySelectorAll(".animatedBackgroundCharacterImage")].map(element => element.children[0])
const canvas = document.getElementById("animatedBackground")
const context = canvas.getContext("2d")
const characters = []
const numCharacters = 20
const characterRadius = 0.05
const characterMaxSpeed = 0.005
const characterAcceleration = 0.002

window.onload = load
window.onresize = resize

//helper functions
function getVelocityComponents(magnitude, direction) { return [magnitude * Math.cos(degToRad(direction)), magnitude * Math.sin(degToRad(direction))] }
function radToDeg(rad) { return (rad * 180 / Math.PI) }
function degToRad(deg) { return (deg * Math.PI / 180) }
function randomBetween(min, max) { return min + Math.random() * (max - min) }
function randomCharacterImage() { return animatedBackgroundCharacterImages[Math.floor(Math.random() * animatedBackgroundCharacterImages.length)] }
function spawnCharacters(numCharacters) { [...new Array(numCharacters)].map(() => characters.push(new Character())) }
function valueFromRangeToRange(value, oldMin, oldMax, newMin, newMax) { return (value / (oldMax - oldMin)) * (newMax - newMin) + newMin }
function smallestCanvasDimension() { return Math.min(canvas.width, canvas.height) }