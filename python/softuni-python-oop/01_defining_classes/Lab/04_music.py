class Music:
    def __init__(self, title, artist, lyrics):
        self.lyrics = lyrics
        self.artist = artist
        self.title = title

    def get_info(self):
        return f'This is "{self.title}" from "{self.artist}"'

    def print_info(self):
        return f'This is "{self.title}" from "{self.artist}"'

    def play(self):
        return f'{self.lyrics}'


song = Music("Title", "Artist", "Lyrics")
print(song.get_info())
print(song.play())

