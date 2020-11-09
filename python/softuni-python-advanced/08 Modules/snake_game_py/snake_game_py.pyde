import config
import snake
import food
import score
import os

def end_screen():
    background(150)
    fill(255)
    textSize(64)
    text("Game Over!", config.WIDTH / 2, config.HEIGHT / 2)

def setup():
    size(config.WIDTH,config.HEIGHT) #set screen and size
    frameRate(5)
    
    if os.path.exists("highscore.txt"):
        with open("highscore.txt", "r") as file:
            score.highscore = int(file.read())
            
    food.food_img = loadImage("images/apple.png")
    snake.snake_head_image = loadImage("images/snake_head.png")

def draw():
    background(41,49,54)
    snake.draw_snake()
    snake.move_snake()
    food.food_show()
    score.show()
    # fill(194,81,78)
    # rect(0,0,40,40) 
    
    if snake.touches_food():
        snake.eat_food()
        food.reset();
        score.increase()
    
    if snake.eat_self():
        print('GAME OVER!')
        score.update_highscore()
        end_screen()
        noLoop()
        
      
    

def keyPressed():
    if keyCode == UP and config.CURRENT_DIR != 'down':
        config.CURRENT_DIR = "up"
    elif keyCode == DOWN and config.CURRENT_DIR != 'up':
        config.CURRENT_DIR = "down"
    elif keyCode == RIGHT and config.CURRENT_DIR != 'left':
        config.CURRENT_DIR = "right"
    elif keyCode == LEFT and config.CURRENT_DIR != 'right':
        config.CURRENT_DIR = "left"
