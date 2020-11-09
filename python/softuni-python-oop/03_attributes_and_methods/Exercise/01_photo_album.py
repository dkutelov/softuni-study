class PhotoAlbum:
    def __init__(self, pages):
        self.pages = pages
        self.photos = [[] for num in range(self.pages)]

    @classmethod
    def from_photos_count(cls, photos_count: int):
        return cls(photos_count // 4)

    def add_photo(self, label):
        for page_num in range(len(self.photos)):
            if not len(self.photos[page_num]) >= 4:
                self.photos[page_num].append(label)
                return f'{label} photo added successfully ' \
                       f'on page {page_num + 1} slot {len(self.photos[page_num])}'
        return f'No more free spots'

    def display(self):
        result = f'-----------\n'
        for page in self.photos:
            if page:
                result += ''.join('[] ' for _ in range(len(page))).strip()
            result += '\n'
            result += f'-----------\n'
        return result



album = PhotoAlbum(3)

print(album.add_photo("baby"))
print(album.add_photo("first grade"))
print(album.add_photo("eight grade"))
print(album.add_photo("party with friends"))
print(album.add_photo("prom"))
print(album.add_photo("wedding"))

print(album.display())


