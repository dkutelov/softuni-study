function solveClasses() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}
Content: ${this.content}`
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content);
            this.originalResearch = originalResearch; // {title: '', author: ''}
            this.comments = [];
        }

        get content() {
            return this._content;
        }

        set content(newContent) {
            if (newContent.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }
            this._content = newContent;
        }

        get originalResearch() {
            return this._originalResearch;
        }

        set originalResearch(newOriginalResearch) {
            if (!newOriginalResearch.hasOwnProperty('title') || !newOriginalResearch.hasOwnProperty('author')) {
                throw new Error('The original research should have author and title.')
            }

            this._originalResearch = newOriginalResearch;
        }

        addComment(comment) {
            this.comments.push(comment);
            return 'The comment is added.';
        }

        toString() {
            let result = `${super.toString()}
Original Research: ${this.originalResearch.title} by ${this.originalResearch.author}`;
            if (this.comments.length > 0) {
                result = `${result}
Comments:
${this.comments.join('\n')}`;
            }
            return result;
        }
    }


    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book; // {name: '...', author: '...'}
            this.clients = [] // {clientName: '...', orderDescription: '...'}
        }

        addClient(clientName,  orderDescription) {
            const currentClient = this.clients.find(client => client.clientName === clientName);
            if (currentClient) {
                throw new Error('This client has already ordered this review.');
            }
            this.clients.push({clientName,  orderDescription});
            return `${clientName} has ordered a review for ${this.book.name}`;
        }

        toString() {
            let result = `${super.toString()}
Book: ${this.book.name}`;
            if (this.clients.length > 0) {
                result = `${result}
Orders: 
${this.clients.map(order =>`${order.clientName} - ${order.orderDescription}`).join('\n')}`;
            }
            return result;
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}

let classes = solveClasses();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString());
console.log('--------------');
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment("In the end JavaScript's features are executed in C++ — the underlying language.")
console.log(short.toString());
let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString());

