class BookReservation {
    id: Number;
    name: string;
    date: string;

    constructor(id: Number,
        name: string,
        date: string) {
            
        this.id = id;
        this.name = name;
        this.date = date;
    }
}

export default BookReservation;