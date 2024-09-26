class Book{
    constructor(title, aurthor,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;

        // ？？？？？
        this.isBottowed = false;
    }
    borrow(){
        if(!this.isBorrowed){
            this.isBorrowed = true;
            console.log(`${this.title}が借りられました。`);
        }else{
            console.log(`${this.title}はすでに貸し出し中です。`);
        }
    }
    returnBook(){
        if(this.isBorrowed){
            this.isBorrowed = false;
            console.log(`${this.title}が返却されました。`);
        }else{
            console.log(`${this.title}は借りられていません。`);
        }
    }
}

class Member {
    constructor(name,memberId){
        this.name = name;
        this.memberId = memberId;
        this.isBorrowedBooks = [];
    }
    borrowBook(book){
        if(!book.isBorrowed){
            // ？？？？？
            book.borrow();
            // 配列に追加してる？
            this.isBorrowedBooks.push(book);
        }else{
            console.log(`${book.title}はすでに借りられています。`)
        }
    }
    returnBook(book){
        // ？？？？？
        const index = this.isBorrowedBooks.indexOf(book);
        if(index > -1){
            book.returnBook();
            this.isBorrowedBooks.splice(index,1);
        }else{
            console.log(`${this.name} さんはこの本を借りていません。`);
        }
    }
}

class Library{
    constructor(){
        this.books = [];
        this.member = [];
    }
    addBook(book){
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

// ===== HTMLとの連動部分 =====

const library = new Library();

document.getElementById("add-book-btn").addEventListener("click",function(){
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const isbn = document.getElementById("book-isbn").value;

    if(title && author && isbn){
        const newBook = new Book(title, aurthor,isbn);
        library.addBook(newBook);
       showMessage(`${title} が追加されました。`);
    } else {
        showMessage('すべてのフィールドを入力してください。');
    }
});

document.getElementById('add-member-btn').addEventListener('click', function() {
    const name = document.getElementById('member-name').value;
    const memberId = document.getElementById('member-id').value;

    if (name && memberId) {
        const newMember = new Member(name, memberId);
        library.addMember(newMember);
        showMessage(`${name} さんが登録されました。`);
    } else {
        showMessage('すべてのフィールドを入力してください。');
    }
});

document.getElementById('borrow-book-btn').addEventListener('click', function() {
    const memberId = document.getElementById('borrow-member-id').value;
    const bookTitle = document.getElementById('borrow-book-title').value;

    const member = library.members.find(m => m.memberId === memberId);
    const book = library.findBookByTitle(bookTitle);

    if (member && book) {
        member.borrowBook(book);
        showMessage(`${member.name} さんが ${book.title} を借りました。`);
    } else {
        showMessage('会員または本が見つかりませんでした。');
    }
});

document.getElementById('return-book-btn').addEventListener('click', function() {
    const memberId = document.getElementById('borrow-member-id').value;
    const bookTitle = document.getElementById('borrow-book-title').value;

    const member = library.members.find(m => m.memberId === memberId);
    const book = library.findBookByTitle(bookTitle);

    if (member && book) {
        member.returnBook(book);
        showMessage(`${member.name} さんが ${book.title} を返却しました。`);
    } else {
        showMessage('会員または本が見つかりませんでした。');
    }
});

function showMessage(message){
    const output = document.getElementById("output");
    output.textContent = message;
}