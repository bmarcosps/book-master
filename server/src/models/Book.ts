class Book {
    id: Number;
    cover: string;
    title: string;
    idiom: string;
    summary: string;
    pages: Number;
    authors: string[];
    keywords: string[];

    constructor(id: Number,
        cover: string,
        title: string,
        idiom: string,
        summary: string,
        pages: Number,
        authors: string[],
        keywords: string[]) {
            
        this.id = id;
        this.cover = cover;
        this.title = title;
        this.idiom = idiom;
        this.summary = summary;
        this.pages = pages;
        this.authors = authors;
        this.keywords = keywords;
    }
}

export default Book;