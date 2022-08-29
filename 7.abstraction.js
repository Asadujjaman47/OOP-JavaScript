// set some set of rule that must follow:
// (mandatory do or follow some task)

// rule that eveyone use talk() method:
// class Animal {
//     constructor() {

//     }
//     talk() {
//         console.log('make some noise');
//     }
// }

// class Cat extends Animal {
//     talk() {
//         console.log('meow meow');
//     }
// }

// class Dog extends Animal {
//     talks() {                   // here we give talks(), instead of talk(). here it work
//         console.log('brak brak');
//     }
// }

// const myCat = new Cat();
// myCat.talk();
// let myDog = new Dog();
// myDog.talks();
/*OUTPUT:
$ node 7.abstraction
meow meow
brak brak
*/


// but function should be talk(), not talks()
// here if we provide it as talk()
// then it will not found in Dog Class, then it will find in it's parent,
// if it found in parent, then execute that

// myDog = new Dog();
// myDog.talk();
// output: make some noise


// if we give something else like talking(),
// then, it couldn't find anywhre, as a result, it throw error
// myDog = new Dog();
// myDog.talking();
// output: error 




// here we can enforce some rule, that talk() method should implement
class Animal {
    constructor() {

    }
    talk() {
        throw new Error("You must implement talk method");
    }
}

class Cat extends Animal {
    talk() {
        console.log('meow meow');
    }
}

class Dog extends Animal {
    talks() {                   // here we give talks(), instead of talk(). here it work
        console.log('brak brak');
    }
    talk() {                   // here we give talks(), instead of talk(). here it work
        // console.log('brak brak');
        this.talks();       // override
    }
}
myDog = new Dog();
myDog.talk();

    // output: throw new Error("You must implement talk method");



