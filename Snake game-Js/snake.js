const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");


const box = 32;

//  ----- images 

const ground = new Image();
ground.src = "img/ground.png";

const foodimg = new Image();
foodimg.src = "img/food.png";

//  ----- snake

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};

//  ----- food

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}


//  ----- score

let score = 0;


// ----- controls

let d;
document.addEventListener("keydown", direction);

function direction(event) {
    if (event.keyCode == 37 && d != "RIGHT") {
        d = "LEFT";
    } else if
        (event.keyCode == 38 && d != "DOWN") {
        d = "UP";
    } else if
        (event.keyCode == 39 && d != "LEFT") {
        d = "RIGHT";
    } else if
        (event.keyCode == 40 && d != "UP") {
        d = "DOWN";
    }
}

// ----- collision function
    function collision(head,array){
        for(let i = 0; i < array.length; i++){
            if(head.x == array[i].x && head.y == array[i].y ){
                return true;
            }
        }
        return false;
    }
//  ----- drawding

function draw() {
    ctx.drawImage(ground, 0, 0);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.drawImage(foodimg, food.x, food.y)

    //  ----- old head position    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;


    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;


    // ----- snake eats food
    if (snakeX == food.x && snakeY == food.y){
        score++;
         food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box
        }
    }else{
        snake.pop();
    }

        // ----- new head

        let newhead = {
            x: snakeX, 
            y: snakeY
        }
// ----- game over
    if (snakeX < box || snakeX > 17 * box || snakeY < 3 * box
         || snakeY > 17 * box || collision(newhead,snake))  {
             clearInterval(game);
         }



    snake.unshift(newhead);


    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score, 2 * box, 1.6 * box)

}




// ----- interval 

let game = setInterval(draw, 300);