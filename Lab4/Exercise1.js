class RegularBulbs {
    constructor() {
        this.lumensRange = [50,100];
        this.lastFor = 1;
    }
}

class EnergySaveBulbs {
    constructor(color) {
        this.lumensRange = [5,40];
        this.lastFor = 10;
        this.color = color;
    }
}

class Factory {
    createBulb(type, color) {
        let bulb;
        if (type === "regular") {
            bulb = new RegularBulbs();
        }
        else if (type === "energy") {
            bulb = new EnergySaveBulbs(color);
        }
        return bulb;
    }
}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}