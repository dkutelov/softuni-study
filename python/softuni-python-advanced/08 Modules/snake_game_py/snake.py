import config
import copy
import food
snake_pos = [[0,0], [config.SCALE, 0], [config.SCALE * 2, 0], [config.SCALE * 3, 0], [config.SCALE * 4, 0]]
snake_head_image = None


def draw_head(head_pos):
    x_head, y_head = head_pos
    half_size = config.SCALE / 2
    translate_x, translate_y = half_size, half_size
    tranlate_back_x, translate_back_y =-half_size, -half_size
    rotate_fwd, rotate_back = 0, 0
    
    if config.CURRENT_DIR == 'right':
        x_head, y_head = - y_head - half_size, x_head - half_size
        rotate_fwd, rotate_back = PI + PI/2, PI/2
    elif config.CURRENT_DIR == 'down':
        translate_x, translate_y = 0, 0
        tranlate_back_x, translate_back_y = 0, 0
        rotate_fwd, rotate_back = 0,0
    elif config.CURRENT_DIR == 'left':
        x_head, y_head = y_head - half_size, - x_head - half_size
        rotate_fwd, rotate_back = PI/2, PI + PI/2
    elif config.CURRENT_DIR == 'up':
        x_head, y_head = - x_head - half_size, -y_head - half_size
        rotate_fwd, rotate_back = PI, PI
        
    translate(translate_x, translate_y)
    rotate(rotate_fwd)
    image(snake_head_image, x_head, y_head, 40, 40)
    rotate(rotate_back)
    translate(tranlate_back_x, translate_back_y)
    

def draw_snake():
    for segment in snake_pos[:-1]:
        fill(194,81,78)
        stroke(0)
        x,y = segment
        rect(x,y,config.SCALE,config.SCALE)
    draw_head(snake_pos[-1])
    
    
def check_edges():
    head = snake_pos[-1]
    
    if head[1] < 0:
        head[1] = config.HEIGHT
    elif head[1] >= config.HEIGHT:
        head[1] = 0
    elif head[0] < 0:
        head[0] = config.WIDTH
    elif head[0] >= config.WIDTH:
        head[0] = 0

def touches_food():
    head = snake_pos[-1]
    fruit = food.food_pos
    return head[0] == fruit[0] and head[1] == fruit[1]

def eat_food():
    snake_pos.insert(0, snake_pos[0])
     
    
def move_snake():
    current_changes = config.DIRECTIONS[config.CURRENT_DIR]
    snake_copy = copy.deepcopy(snake_pos)
    
    snake_pos[-1][0] += current_changes[0]
    snake_pos[-1][1] += current_changes[1]
    
    for i in range(len(snake_pos) - 2, -1, -1):
        snake_pos[i] = snake_copy[i+1]
    
    check_edges()
    
def eat_self():
    head = snake_pos[-1]
    return any(seg == head for seg in snake_pos[:-1])
