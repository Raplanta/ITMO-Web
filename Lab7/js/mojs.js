var speed = 1;

var color_green = randomColor({
    luminosity: 'light', //яркость
    hue: 'yellow' //оттенок
});

var bubbles = []
for (let i = 0; i < 100; i++) {
    var rand = Math.floor(Math.random() * 20) + 10;
    var bubble = new mojs.Shape({
        className: "mojs-bubbles",
        left: Math.floor(Math.random() * (document.documentElement.clientWidth - 100)) + 50, //координаты
        top: -200, //координаты
        stroke: {
            "#426bdd": color_green
        }, //цвет
        strokeWidth: 4, //ширина
        fill: 'none', //цвет внутри круга
        radius: rand, //радиус (от 10 до 30)
        duration: (30 - (rand - 10)) * 500, //время действия (от 5000 до 15000)
        y: {
            0: document.documentElement.scrollHeight + 170, //движение
        },
        delay: "rand(0, 10000)", //задержка
        repeat: 100 //сколько раз повторять
    });
    bubbles.push(bubble);
    bubble.play(); //запускается сразу
}

document.querySelector(".play").addEventListener("click", function() {
    bubbles.forEach(el => el.play());
});

document.querySelector(".pause").addEventListener("click", function() {
    bubbles.forEach(el => el.pause());
});

document.querySelector(".stop").addEventListener("click", function() {
    bubbles.forEach(el => el.stop());
});

document.querySelector(".faster").addEventListener("click", function() {
    speed = speed*2;
    bubbles.forEach(el => el.setSpeed(speed));
});

document.querySelector(".slower").addEventListener("click", function() {
    speed = speed/2;
    bubbles.forEach(el => el.setSpeed(speed));
})