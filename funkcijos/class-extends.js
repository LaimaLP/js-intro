console.clear();

class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Miau Au Cypt Cham';
    }

    setColor(newColor) {
        this.color = newColor;
    }

    sayHi() {
        return `${this.name}: ${this.sound}, as esu ${this.color} spalvos!`;
    }
}

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Au Au';
    }

    repeatTwice() {
        return 'repeat in progress...';
    }
}

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Miau Miau';
    }
}

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Cham Cham';
    }
}

const rex = new Dog('Rex', 'juodos');
console.log(rex.sayHi());
console.log(rex.repeatTwice());

const garfildas = new Cat('Garfildas', 'oranzines');
console.log(garfildas.sayHi());

const tom = new Hamster('Tom', 'juodos');
console.log(tom.sayHi());


class Animal {
    constructor(name, color, legsCount, canFly, canSwim, cantTalk, voice){
        this.name = name;
        this.color = color;
        this.legsCount = legsCount;
        this.canFly = canFly;
        this.canSwim = canSwim;
        this.cantTalk = cantTalk;
        this.voice = voice;
    }
}

class Pets extends Animal{
   

}


class Dog extends Pet{
    this.introduce
}
class Cat extends Per{}
class Bird extends Animal{}
class Parrot extends Bird{}
class Penguine extends Bird{}
class Fish extends Animal{
    constructor(name, color, legsCount, canFly, canSwim, cantTalk){
        super(name, color, legsCount, canFly, canSwim, cantTalk)
    }
}

class GoldenFish extends Fish{
    constructor(name, color, legsCount, canFly, canSwim, cantTalk){
        super(name, color, legsCount, canFly, canSwim, cantTalk);
            this.grantAwish = "true";
            this.introduce =`Mano vardas ${this.name} ir aš esu ${this.color}`
            this.voice = "Nekalbu"
    }
}
class Shark extends Animal{
    constructor(name, color, legsCount, canFly, canSwim, cantTalk){
        super(name, color, legsCount, canFly, canSwim, cantTalk);
            this.voice = "shark skark";
            this.isHungry = "yes" 
            this.introduce = `Mano vardas ${this.name} ir sakau ${this.voice}`
        
    }
}


const goldenFish = new GoldenFish("mikas", "golden", "0", "false", "true", "false")
console.log(goldenFish)


const shark = new Shark("Pitas", "pilkas", "0", "false", "true", "false")
console.log(shark)