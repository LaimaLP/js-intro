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