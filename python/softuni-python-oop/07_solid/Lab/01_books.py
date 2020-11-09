class Library:
    def __init__(self, location):
        self.books = []
        self.location = location

    def find_book(self, title):
        try:
            book = [book for book in self.books if book.title == title][0]
            return book
        except IndexError:
            return 'Book not found'

    def add_book(self, book):
        self.books.append(book)


class Book:
    def __init__(self, title, author, total_pages):
        self.title = title
        self.author = author
        # self.location = location - the book should not know about its location
        self.total_pages = total_pages


class Person:
    def __init__(self, name):
        self.name = name
    

class Reader(Person):
    def __init__(self, name, current_book):
        super().__init__(name)
        self.current_book = current_book

    def turn_page(self, page):
        self.page += 1

