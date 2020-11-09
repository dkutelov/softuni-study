current_score = 0
highscore = 0

def show():
    fill(255)
    textSize(24)
    text("Score: " + str(current_score), 20, 40)
    text("Higest Score: " + str(highscore), 20, 70)

def increase():
    global current_score
    current_score += 1

def update_highscore():
    if current_score > highscore:
        with open("highscore.txt", "w") as file:
            file.write(str(current_score))
