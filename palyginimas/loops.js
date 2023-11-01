const marks = [10, 2, 8, 4, 6]
let sumFor=0;

let sumForOf = 0;
for(const mark of marks){
    sumForOf += mark;
}

console.log('FOR-OF: sum =', sumForOf);


//while


let sumWhile =0;
let iWhile= 0;

while(iWhile < marks.length){
    const mark= marks[iWhile]
    sumWhile += mark;
    iWhile++;

}
console.log('While', sumWhile)


// do- while

let sumDoWhile = 0;
let iDoWhile= 0;

do{
    const mark = marks[iDoWhile];
    sumDoWhile += mark;
    iDoWhile++;

}while(iDoWhile< marks.length);

console.log('DoWhile', sumDoWhile)
