export class Animal {

    constructor(type, legs) {
        this.type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    // we can get method name like a property using get name
    get metaData() {
        return `${this.type}, ${this.legs} `;
    }

    static return10() {
        return 10;
    }

}

export class Cat extends Animal {
    // constructor(type, legs, tail) {
    //     super(type, legs)
    //     this.tail = tail;
    // }

    // @override
    makeNoise(sound = "Miauuuuu") {
        console.log(sound);
    }
}