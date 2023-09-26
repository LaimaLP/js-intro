/*
Object - objektas
*/

console.clear();

//vartotojas: vardas, amzius, ar vedes;
// const jonasData = ['admin', 'Jonas', 99, true];
// const maryteData = ['Maryte', 88, false];


// const jonasName= jonasData[0];
// const jonasAge = jonasData[1];
// const jonasIsMarried = jonasData[3];

// const maryteName = maryteData[0];
// const maryteAge = maryteData[1];
// const maryteIsMarried = maryteData[2];

// console.log(jonasName, jonasAge, jonasIsMarried);
// console.log(maryteName, maryteAge, maryteIsMarried);

// key: value
const jonas = {
    name: 'Jonas',
    age: 99,
    isMarried: true,

}

console.log(jonas);
console.log(jonas['name'], jonas.name);
console.log(jonas['age'], jonas.age);
console.log(jonas['isMarried'], jonas.isMarried);

jonas.age++;
console.log(jonas);