const score = document.querySelector('.score');
const highScore = document.querySelector('.highScore');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');
const ClickToStart = document.querySelector('.ClickToStart');

ClickToStart.addEventListener('click', Start);
document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
}

let player = {
    speed: 5,
    score: 0,
    highScore: 0,
    isStart: false,
    x: 175,
    y: 520
};

function keydown(e) {
    keys[e.key] = true;
}

function keyup(e) {
    keys[e.key] = false;
}

// starting the game
function Start() {
    gameArea.innerHTML = "";
    startScreen.classList.add('hide');
    player.isStart = true;
    player.score = 0;
    player.speed = 5;
    player.x = 175;
    player.y = 520;
    
    // creating the road lines
    for (let i = 0; i < 5; i++) {
        let roadLines = document.createElement('div');
        roadLines.setAttribute('class', 'roadLines');
        roadLines.y = (i * 140);
        roadLines.style.top = roadLines.y + "px";
        gameArea.appendChild(roadLines);
    }
    
    // creating the opponents car
    for (let i = 0; i < 3; i++) {
        let Opponents = document.createElement('div');
        Opponents.setAttribute('class', 'Opponents');
        Opponents.y = ((i) * -300);
        Opponents.style.top = Opponents.y + "px";
        gameArea.appendChild(Opponents);
        Opponents.style.left = Math.floor(Math.random() * 350) + "px";
        Opponents.style.backgroundColor = randomColor();
    }
    
    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    gameArea.appendChild(car);
    
    window.requestAnimationFrame(Play);
}

function randomColor(){
    function c(){
        let hex = Math.floor(Math.random() * 256).toString(16);
        return ("0" + String(hex)).substr(-2);
    }
    return "#" + c() + c() + c();
}

//play the game
function Play() {
    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();
    
    if (player.isStart) {
        moveLines();
        moveOpponents(car);
        
        if (keys.ArrowUp && player.y > (road.top + 70)) { 
            player.y -= player.speed; 
        }
        if (keys.ArrowDown && player.y < (road.height - 75)) { 
            player.y += player.speed; 
        }
        if (keys.ArrowRight && player.x < 350) { 
            player.x += player.speed; 
        }
        if (keys.ArrowLeft && player.x > 0) { 
            player.x -= player.speed; 
        }
        
        car.style.top = player.y + "px";
        car.style.left = player.x + "px";
        
        highScore.innerHTML = "HighScore: " + player.highScore;
        player.score++;
        player.speed += 0.01;
        
        if (player.highScore < player.score) {
            player.highScore = player.score;
            highScore.innerHTML = "HighScore: " + player.highScore;
        }
        
        score.innerHTML = "Score: " + player.score;
        window.requestAnimationFrame(Play);
    }
}

function moveLines() {
    let roadLines = document.querySelectorAll('.roadLines');
    roadLines.forEach(function (item) {
        if (item.y >= 700) {
            item.y -= 700;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}

function moveOpponents(car) {
    let Opponents = document.querySelectorAll('.Opponents');
    Opponents.forEach(function (item) {
        if (isCollide(car, item)) {
            endGame();
        }
        if (item.y >= 750) {
            item.y -= 900;
            item.style.left = Math.floor(Math.random() * 350) + "px";
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
    });
}

//check whether the cars collide or not
function isCollide(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();
    return !((aRect.top > bRect.bottom) || (aRect.bottom < bRect.top) || (aRect.right < bRect.left) || (aRect.left > bRect.right));
}

//game is end
function endGame() {
    player.isStart = false;
    player.speed = 5;
    startScreen.classList.remove('hide');
}