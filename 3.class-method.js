// in a class, function called as a method

// class Hero {
//     constructor(name){
//         this.name = name;
//     }
// }

// const batman = new Hero('batman')
// console.log(batman.name);

// const catman = new Hero('catman')
// console.log(catman.name);


// class Hero {
//     constructor(name, power) {
//         this.name = name;
//         this.power = power;
//     }
//     // no function keyword
//     getPower() {
//         
//     }
// }


// const catMan = new Hero('catman', 'khamsi')
// console.log(catMan.power);



// apply condition
// class Hero {
//     constructor(name, power) {
//         this.name = name;
//         this.power = power;
//     }
//     // no function keyword
//     getPower() {
//         if (this.power) {
//             return this.power
//         }
//         return 'I have no power'
//     }
// }


// const catMan = new Hero('catman')
// console.log(catMan.power);
// console.log(catMan.getPower());

// Output:
// undefined
// I have no power



// we can call one method in another method
// class Hero {
//     constructor(name, power) {
//         this.name = name;
//         this.power = power;
//     }
//     // no function keyword
//     getPower() {
//         if (this.power) {
//             return this.power;
//         }
//         return 'I have no power';
//     }
//     goForGrocery() {
//         if (this.power) {
//             console.log(this.getPower());
//         }
//         return 'Price is too high, I can not buy'
//     }
// }

// const catMan = new Hero('catman', 'Deep Khamsi')
// console.log(catMan.goForGrocery());




class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    // no function keyword
    getPower() {
        if (this.power) {
            return this.power;
        }
        return 'I have no power';
    }
    goForGrocery(budget) {
        if (this.power && budget > 1000) {
            console.log(this.getPower());
        }
        return 'Price is too high, I can not buy'
    }
}

const catMan = new Hero('catman', 'Deep Khamsi')
console.log(catMan.goForGrocery(1060));