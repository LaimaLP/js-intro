console.clear()
console.clear()

class Dog{
    constructor(name, color) {
        this.name = vardas;
        this.color = spalva;
        this.age = naujasAmzius;
    }

    setAge(naujasAmzius) {
        if(typeof naujasAmzius !== "number"){
            return "Error:turi buti skaicius.";
        }
        this.age = naujasAmzius;
        return naujasAmzius;   
    }
    hello(){
    return `Au au, as esu ${this.name}!`
    }
}

// console.log(hello)


const rex = new Dog("Rex", "black", 5);
const brisius = new Dog("Brisius", "white", 8);
const kysius = new Dog("Kysius", "purple", "labas");



console.group("--------")
console.log(rex.setAge())
console.group("--------")



console.log(rex);
console.log(brisius);
console.log(kysius);

// console.log(brisius.name);
// console.log(rex.name);


// const r = {
//     name: "Rex",
//     color: "black"
// };
// const b={
//     name: "Brisius",
//     color: "white"
// }