file_path = './my_first_text_file.txt'
text = 'I just created my first file!'

with open(file_path, 'w') as file:
    file.write(text)
    #print(text, file=file)