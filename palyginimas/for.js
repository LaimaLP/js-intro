/*
FOR - "for" ciklas
bazinis is visu galimu ciklu
*/

// console.clear();
// console.log(`START`);
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// console.log(`PAUSE`);

// for (let i = -2; i <= 7; i++) {
//   console.log(i);
// }
// console.log(`FINISH`);

// console.clear();

// for (let f = 0; f < 10; f++) {
//   console.log(f, `labas`);
// }

// for (let f = 0; f < 7; ++f) {
//   console.log(f, `labas`);
//   console.log(f, `rytas`);
// }

// for (let f = 0; f < 7; ++f) {
//   const sentence = `The number is: ${f + 1}.`;
//   console.log(sentence);
// }

// console.clear();

// SKaiciai intervale nuo 3 iki 8 imtinai yra: 3 4 5 6 7 8.

// for (let i = 3; i<=8; i++)

// const start = 3;
// const finish = 8;
// let numberSequence = '';

// for(let i = start; i <=finish; i++){

//     numberSequence += ' ' + i;
// }

// const numberLine = `SKaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSequence}.`;
// console.log(numberLine);

// let numberSequence2 = ' ';

// for (let i = start; i < finish; i++){
//     numberSequence2 += i + ',';
// }
// numberSequence2 += finish;

// const numberLine2 = `SKaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSequence2}.`;

// console.log(numberLine2);
// = '3|, 4, 5, ..
// console.log(11111111111);

//  let numberSequence2 = start;

// for (let i = start + 1; i <= finish; i++){
//     numberSequence2 += ',' +i;
// }

// const numberLine2 = `SKaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSequence2}.`;

// console.log(numberLine2);

// console.log(77777777777777);

// console.clear();

// for (let i= 0; i<=10; i++){
//     console.log(i);
// }
// function arTestiCikla(index){
//     if(index <= 10) {
//         return true;
//     }else {
//         return false;
//     }
// }

// for (let i= 0; arTestiCikla(i); i +=2 ){
//             console.log(i, 'ciklas');
//     }

// console.clear();

// const word ='zodis';
// //Raide: z;
// //Raide: o;

// console.log(`Raide: ${word[0]}`);

// for (let i=0; i < word.length; i++)
// console.log(`Raide: ${word[i]}`);

// console.clear();

// const marks = [5, 10, 2];

// let totalSum = 0;
// const count = marks.length;

// for (let i = 0; i < count; i++) {
//   totalSum += marks[i];
// }

// const average = totalSum / count;
// console.log(Math.floor(average));

// console.log(`---------------------------`);
// console.clear();

// let marks = [5, 2, 3];
// function getAverage(marks){
//     let totalSum = 0;
//      let count = marks.length;

//    for (let i=0; i<count; i++){

//   totalSum += marks[i];
//     console.log(Math.floor(totalSum/count))
//    }
//   }

// let manolistas = [-1.5];

// function getAverage(maru) {
//   let sum = 0;
//   for (i = 0; i < maru.length; i++) {
//     sum += maru[i];
//   }
//   console.log(Math.floor(sum / maru.length));
// }

// function test(){
//     console.log('testuoju')
// }
// test();

// getAverage(manolistas);


/*
FOR - "for" ciklas
bazinis is visu galimu ciklu
*/

console.clear();

console.log('START');

// intervalas: [0, 5)
for (let i = 0; i < 5; i++) {
    console.log(i, 'pirmas');
}

console.log('PAUSE');

// intervalas: [-2, 7]
for (let i = -2; i <= 7; i++) {
    console.log(i, 'antras');
}

console.log('FINISH');

console.clear();

for (let f = 0; f < 7; f++) {
    const sentence = `The number is: ${f + 1}.`;
    console.log(sentence);
}

console.clear();

// Skaiciai intervale nuo 3 iki 8 imtinai yra: 3 4 5 6 7 8.

const start = 3;
const finish = 8;
let numberSequence = '';

for (let i = start; i <= finish; i++) {
    numberSequence += ' ' + i;
}

const numberLine = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSequence}.`;

console.log(numberLine);


// Skaiciai intervale nuo 3 iki 8 imtinai yra: 3, 4, 5, 6, 7, 8.

// const numberSequence2 = '3, 4, 5, 6, 7, 8';
let numberSequence2 = start;

for (let i = start + 1; i <= finish; i++) {
    numberSequence2 += ', ' + i;
}

const numberLine2 = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra: ${numberSequence2}.`;

console.log(numberLine2);

console.clear();

function arTestiCikla(index) {
    if (index <= 10) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; arTestiCikla(i); i += 2) {
    console.log(i, 'ciklas');
}

console.clear();

const word = 'zodelis';

for (let i = 0; i < word.length; i++) {
    console.log(i, `Raide: ${word[i]}`);
}

console.clear();

//              0  1  2  3  4
const marks = [10, 2, 8, 4, 6];

let totalSum = 0;
const amount = marks.length;

for (let i = 0; i < amount; i++) {
    const mark = marks[i];
    totalSum += mark;
    console.log(`${i})`, mark, '=', totalSum);
}

const average = totalSum / amount;
console.log(marks, 'average is', average);

