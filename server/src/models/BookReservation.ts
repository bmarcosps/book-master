class BookReservation {
    id: number;
    name: string;
    date: string;

    constructor(id: number,
        name: string,
        date: string) {
            
        this.id = id;
        this.name = name;
        this.date = date;
    }
}

export default BookReservation;