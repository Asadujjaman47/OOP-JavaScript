// javascript class syntactic sugar

// before ES6
function Cat(name) {
    this.name = name;
}

// method:
Cat.prototype.talk = function () {
    console.log(('meow meow'));
}

const myCat = new Cat('Tiger');
console.log(myCat);
// output: Cat { name: 'Tiger' }

myCat.talk()
    // output: meow meow



