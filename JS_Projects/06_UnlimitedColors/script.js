const randomColorGenerator = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
// console.log(randomColorGenerator())

let startAgain = null;

const startChangingColor = function () {
    if (!startAgain) {
        startAgain = setInterval(setBgColor, 1000)

        function setBgColor() {
            document.body.style.backgroundColor = randomColorGenerator()
        }
    }
}
const stopChangingColor = function () {
    clearInterval(startAgain)
    startAgain = null
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)