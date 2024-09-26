class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isBorrowed = false;
    }

    borrow() {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`${this.title} が借りられました。`);
        } else {
            console.log(`${this.title} はすでに貸し出し中です。`);
        }
    }

    returnBook() {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            console.log(`${this.title} が返却されました。`);
        } else {
            console.log(`${this.title} は借りられていません。`);
        }
    }
}

class Member {
    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (!book.isBorrowed) {
            book.borrow();
            this.borrowedBooks.push(book);
        } else {
            console.log(`${book.title} はすでに借りられています。`);
        }
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log(`${this.name} さんはこの本を借りていません。`);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`${book.title} が図書館に追加されました。`);
    }

    addMember(member) {
        this.members.push(member);
        console.log(`${member.name} さんが図書館に登録されました。`);
    }

    findBookByTitle(title) {
        return this.books.find(book => book.title === title);
    }
}

const library = new Library();

document.getElementById("add-book-btn").addEventListener("click", function() {
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const isbn = document.getElementById("book-isbn").value;

    if (title &&
