/*
FOR - "for" ciklas
bazinis is visu galimu ciklu
*/



console.clear();
console.log(`START`);
for(let i = 0; i<5; i++) {

    console.log(i);
}

console.log(`PAUSE`);

for(let i = -2; i<=7; i++) {

    console.log(i);
}
console.log(`FINISH`);

console.clear();

for (let f = 0; f<10; f++){
    console.log(f, `labas`);
}

for (let f = 0; f<7; ++f){
    console.log(f, `labas`);
    console.log(f, `rytas`);
}


for (let f = 0; f<7; ++f){
    const sentence = `The number is: ${f+1}.` ;
    console.log(sentence);
}

console.clear();

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
 
// const marks = [10, 2, 8, 4, 6, 9];

// let totalSum = 0;
// const count = marks.length;

// for (let i=0; i < count; i++){
// const mark = marks[i];
// totalSum += marks[i];
// console.log(`${i}, marks[i], '=', totalSum`);
// }

// const average = totalSum/count;
// console.log(kkkk);

console.log(`---------------------------`);

