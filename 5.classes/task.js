class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(condition) {
		if (condition < 0) {
			this._state = 0;
		} else if (condition > 100) {
			this._state = 100;
		} else {
			this._state = condition;
		}

	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount, author);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount, author);
		this.type = "fantastic";
	}
}
class DetectiveBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount, author);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		const findByParametrBook = this.books.find(item => item[type] === value)
		return !!findByParametrBook ? findByParametrBook : null;
	}

	giveBookByName(bookName) {
		const index = this.books.findIndex(book => book.name === bookName);
		if (index !== -1) {
			return this.books.splice(index, 1)[0];
		}
		return null;
	}

}