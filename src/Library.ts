class Library {

    items:Array<Item>;

    constructor(public books: Array<Book>,public movies:Array<Movie>){

    }

    static fromJSON(data: any) : Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books,movies);
    }
    addMovie(){
        this.items = [];
        let movie:Movie = new Movie("Crank","Action","drug addict",16,"P");
        this.items.push(movie);

        var articleContainer: HTMLElement = document.getElementById("items");
        this.items.forEach(article => article.render(articleContainer));

    }
    addBook(){
        this.items = [];
        let book:Book = new Book("De Koningsmaffia",new Author("John Doe"),"Maffia","About the maffia ofcourse");
        this.items.push(book);

        var articleContainer: HTMLElement = document.getElementById("items");
        this.items.forEach(article => article.render(articleContainer));

    }
    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }
}