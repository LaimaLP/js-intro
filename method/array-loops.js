console.clear()

const marks = [10, 2, 8, 4, 6];
const doubleMarksFor = [];

for (let i=0; i<marks.length; i++){
    doubleMarksFor.push(marks[i]*2)
}
console.log(doubleMarksFor);

///////////////////////////////////////////
const doubleMarksForOf = [];

for(const mark of marks){
    doubleMarksForOf.push(mark*2)
}
console.log(doubleMarksForOf);

///////////////////////////////////////////

function doubleOrNothing(number){
    return number * 2;
}
const doubleMarkMap = marks.map(doubleOrNothing);
console.log("map:",doubleMarkMap)
///

const doubleOrNothing2 = n => n * 2;
const doubleMarkMap2 = marks.map(doubleOrNothing2);
console.log("map2:",doubleMarkMap2)

///

const doubleMarkMap3 = marks.map(n => n * 2)
console.log("map3:",doubleMarkMap3)

//////////////////

const badMarks = [10,2,-6, -14, 8, 4, 0, NaN, 3.14, Math.PI, "Blogas pazymys"];
console.log("badMarks:", badMarks)


function arSkaicius (number) {
    if(typeof number === "string"){
        return false;
    }
    if(number<=0){
        return false
    };
    if(isNaN(number)){
        return false
    }
    if(number%1 !==0){
        return false;
    }
    return true
}



const goodMarksOnly = badMarks.filter(arSkaicius);


console.log(goodMarksOnly)

const goodMarksOnly2 = badMarks
    .filter(n => typeof n === 'number')
    .filter(n => isFinite(n))
    .filter(n => n > 0)
    .filter(n => n < 11)
    .filter(n => Number.isInteger(n))


console.log("goodMarksOnly2", goodMarksOnly2)

const goodMarksOnly3 = badMarks
    .filter(n => typeof n === 'number' && isFinite(n) && n > 0 &&  n < 11 && Number.isInteger(n))


console.log("goodMarksOnly3", goodMarksOnly3)

const stringList = ["a", "A", "b", "B", "ab", "AB", "labas"]
console.log(stringList)

const numberList = [10,2,8,4,6,20]
numberList.sort()
console.log(numberList)
numberList.sort((a,b)=>a-b)
console.log(numberList)

numberList.sort((a,b)=>b-a)
console.log(numberList)
//////////////////

const family = [
    {name: 'Maryte', age: 88},
    {name: 'Jonas', age: 99},
        {name: 'Ona', age: 66},
    {name: 'Petras', age: 77},

];
const fancyFamily = family
    .sort((a,b)=>a.age-b.age)
    .map(user => user.name)
    .join(", ") + ".";


console.log("fancyFamily:",fancyFamily)

//---------
family.sort((a,b)=>a.age-b.age);
console.log(family)
//---------
const namesMap = family.map(user => user.name);
const familyString2 = namesMap.join(", ")+ ".";
console.log(familyString2)

//---------
const  names =[];
for(const user of family){
    names.push(user.name);
}
console.log(names)

const familyString = names.join(", ")+ ".";
console.log(familyString)

console.clear()

const pazymiai = [10,2,8,4,6];
console.log(pazymiai)

let pazymiuSuma = 0;
for(const pazymys of pazymiai){
    pazymiuSuma += pazymys
}

const vidurkis = pazymiuSuma/pazymiai.length;

console.log("Vidurkis:", vidurkis)

function redFunc(total, number){
    return total + number
}
const redSum = pazymiai.reduce(redFunc)
console.log(redSum)

const redSum2 = pazymiai.reduce((t, n)=> t + n)
console.log(redSum2)

const redSum3 = pazymiai.reduce((t, n)=> t + n, 0)
console.log(redSum3)

const red1 = [1,2,3,4].reduce((t, n)=>t+n);
console.log("+", red1)

const red2 = [1,2,3,4].reduce((t, n)=>t+n, 0);
console.log("+", red2)

const red5 = [1,2,3,4].reduce((t, n)=>t-n);
console.log("-", red5) 

const red3 = [1,2,3,4].reduce((t, n)=>t-n, 0);
console.log("-", red3)

const red6 = [1,2,3,4].reduce((t, n)=>t*n, 0);
console.log("*", red6)

const red4 = [1,2,3,4].reduce((t, n)=>t*n, 1);
console.log("*", red4)