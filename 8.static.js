// static can be property or method, and it only access by class, not object

// class Animal {
//     static category = 'Dog'
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }
//     static compsre(anima1, anima2) {
//         if (anima1.speed > anima2.speed) {
//             return `${anima1.name} is Faster`;
//         }
//         return `${anima2.name} is Faster`;
//     }
// }

// const myRat = new Animal('rat', 12);
// console.log(myRat);
// //  output: Animal { name: 'rat', speed: 12 }

// // console.log(myRat.category);
// // it will give error

// console.log(Animal.category);
//     // output: Dog











// class Animal {
//     static category = 'Dog';
//     location = 'Dhaka';
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }
//     static compsre(anima1, anima2) {
//         if (anima1.speed > anima2.speed) {
//             return `${anima1.name} is Faster`;
//         }
//         return `${anima2.name} is Faster`;
//     }
// }

// const myRat = new Animal('rat', 12);
// console.log(myRat.category);
// console.log(myRat.location);
// console.log(Animal.category);
// console.log(Animal.location);
// output:
// undefined
// Dhaka
// Dog
// undefined













class Animal {
    static category = 'Dog';
    location = 'Dhaka';
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    static compare(anima1, anima2) {
        if (anima1.speed > anima2.speed) {
            return `${anima1.name} is Faster`;
        }
        return `${anima2.name} is Faster`;
    }
}

const myRat = new Animal('rat', 12);
const myDog = new Animal('dog', 50);
console.log(Animal.compare(myRat, myDog));
// output: dog is Faster


