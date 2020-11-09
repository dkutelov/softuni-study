class Band:
    def __init__(self, name):
        self.name = name
        self.albums = []

    def add_album(self, album):
        if album in self.albums:
            return f'Band {self.name} already has {album.name} in their library.'

        self.albums.append(album)
        return f'Band {self.name} has added their newest album {album.name}.'

    def remove_album(self, album_name: str):
        album = list(filter(lambda n: n.name == album_name, self.albums))

        if not album:
            return f'Album {album_name} is not found.'

        album = album[0]
        if album.published:
            return 'Album has been published. It cannot be removed.'

        self.albums.remove(album)
        return f'Album {album.name} has been removed.'

    def details(self):
        info = f'Band {self.name}\n'
        info += "\n".join([album.details() for album in self.albums])
        return info
