// private => #

// class Tiger {
//     #speed = 100;       // private
//     constructor(name) {
//         this.name = name;
//     }
//     run() {
//         console.log(`I am ${this.name}. I am running at ${this.#speed} mph`);
//     }
// }

// const royal = new Tiger('ROyal Bengal');
// royal.run();
// console.log(royal.#speed);  // we cannot access or set any private variable outside of the class




// but we can set private variable only in class:
class Tiger {
    #speed = 100;       // private
    constructor(name) {
        this.name = name;
        this.#speed = 125
    }
    run() {
        console.log(`I am ${this.name}. I am running at ${this.#speed} mph`);
    }
}

const royal = new Tiger('ROyal Bengal');
royal.run();