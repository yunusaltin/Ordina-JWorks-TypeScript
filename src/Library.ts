class Library {
    items:Array<Item> = [];

    constructor(){
        let matrix  = new Movie("Matrix","thriller","tell em some");
        let mobyDick = new Book("Moby Dick",new Author("Herman Malville"),"Drama","About a big fish");

        this.items.push(matrix);
        this.items.push(mobyDick);
    }

    static fromJSON(data: any) : Library {
       // todo Initialise the two arrays with the external json resource
        return null
    }

    publishItems():void{

        var articleContainer: HTMLElement = document.getElementById("items");
        this.items.forEach(article => article.render(articleContainer));
    }
}