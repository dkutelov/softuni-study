import config
food_img = None

x = random(config.WIDTH - config.SCALE) // config.SCALE * config.SCALE
y = random(config.HEIGHT - config.SCALE) // config.SCALE * config.SCALE
food_pos = [x, y]

def food_show():
    #fill(0, 255, 0)
    #rect(food_pos[0], food_pos[1], config.SCALE,config.SCALE)
    image(food_img, food_pos[0], food_pos[1], config.SCALE, config.SCALE)
    
def reset():
    x = random(config.WIDTH - config.SCALE) // config.SCALE * config.SCALE
    y = random(config.HEIGHT - config.SCALE) // config.SCALE * config.SCALE
    print(x,y)
    food_pos[0] = x
    food_pos[1] = y
