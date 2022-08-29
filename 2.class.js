class PeDrive {
    // peoperty set in constructor
    constructor(capacity, color, price) {
        //property name start with this keyword 
        this.capacity = capacity;
        this.colo = color;
        this.price = price;
    }
}

// create object
const hp = new PeDrive('128GB', 'Black', 2500);
console.log(hp);

const smart = new PeDrive('64GB', 'White', 1600);
console.log(smart);



// Before ES6

function StickyNote(color, price) {
    this.colo = color;
    this.price = price;
}

const note = new StickyNote('yellow', '40');
console.log(note);

