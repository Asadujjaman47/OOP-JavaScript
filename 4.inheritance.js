class Device {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    charging() {
        console.log("I am eating electrons...");
    }
}

class Phone extends Device {
    constructor(name, price, camera) {
        super(name, price);
        this.camera = camera;
    }

}

class Watch extends Device {
    constructor(name, price, distance) {
        super(namer, price);
        thid.distance = distance;
    }
}

class Tablet extends Device {
    constructor(name, price, display) {
        super(name, price);
        thid.display = display;
    }
}

const samsi = new Phone('Samsung', 600000, '21MP');
samsi.charging()