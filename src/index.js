    import { randomNumber } from "./randomNumber"
    
    const snake = document.getElementById('snake')
    const board = document.getElementById('board')
    const ball = document.createElement('div')
    const directions = document.querySelectorAll('[data-control]')
    board.append(ball)
    ball.classList.add('ball')
    let MOVE_RIGHT = 0
    let MOVE_DOWN = 0
    let CONSTANT = 5
    let WIN_POINT = [randomNumber(10,280) , randomNumber(10,280)]
    let SNAKE_WIDTH = 1
    snake.style.width = SNAKE_WIDTH + 'em'


    // EVENT CATCHERS
    directions.forEach(direction => {
        direction.addEventListener('click',direction_handler)
        direction.addEventListener('mousedown',direction_handler)
    })

    document.addEventListener('keydown',(key) => {
        ball.style.margin = `${WIN_POINT[0]+'px'} ${WIN_POINT[1]+'px'}`
        event_handler(key)
        check_win()
    })


    // EVENT CONTROLLERS
    function event_handler(e) {
        if(e.keyCode == 39){
            move_right()
        }else if(e.keyCode == 37){
            move_left()
        }else if(e.keyCode == 38){
            move_up()
        }else if(e.keyCode == 40){
            move_down()
        }
    }

    function direction_handler(button) {
        ball.style.margin = `${WIN_POINT[0]+'px'} ${WIN_POINT[1]+'px'}`
        check_win()

        if(button.target.dataset.control == "right"){
            move_right()
        }else if(button.target.dataset.control == "left"){
            move_left()
        }else if(button.target.dataset.control == "up"){
            move_up()
        }else if(button.target.dataset.control == "down"){
            move_down()
        }
    }

    // DIRECTIONS

    function move_right() {
        snake.style.transform = `rotate(0deg)`
        board.style.backgroundColor = 'var(--darkest)'
        MOVE_RIGHT+=CONSTANT
        snake.style.marginLeft = MOVE_RIGHT+'px'
        if(MOVE_RIGHT >= 300){
            MOVE_RIGHT = CONSTANT
            snake.style.marginLeft = CONSTANT
        }
    }

    function move_down() {
        MOVE_DOWN+=CONSTANT
        snake.style.marginTop = MOVE_DOWN + 'px'
        snake.style.transform = `rotate(90deg)`
        if(MOVE_DOWN >= 300){
            MOVE_DOWN = CONSTANT
            snake.style.MOVE_DOWN = CONSTANT
        }

        document.addEventListener('keydown',(happens) => {
            if(happens.keyCode == 39){
                snake.style.transform = `rotate(0deg)`
            }
        })
    }

    function move_left() {
        snake.style.transform = `rotate(-180deg)`
        MOVE_RIGHT -= CONSTANT
        snake.style.marginLeft = MOVE_RIGHT + 'px'
        if(MOVE_RIGHT <= 0){    
            MOVE_RIGHT = 300
        }
    }

    function move_up() {
        snake.style.transform =  `rotate(-90deg)`
        MOVE_DOWN-= CONSTANT    
        snake.style.marginTop = MOVE_DOWN + 'px'
        if(MOVE_DOWN <= 0){
            MOVE_DOWN = 300
        }
    }

    // WINNING CHECKINGS
    function check_win() {
        if(WIN_POINT.includes(MOVE_DOWN)&&WIN_POINT.includes(MOVE_RIGHT)){
            win()
        }
    }

    function win() {
        WIN_POINT = [randomNumber(10,280) , randomNumber(10,280)]
        SNAKE_WIDTH += 0.5
        snake.style.width = SNAKE_WIDTH + 'em'
    }