/*
FUNCTION -funkcija
perpanaudojamas logikos blokas 
*/


console.clear();

// JS bando istaisyti klaidas

console.log(99%10)

console.log('-------------');


function tuscia () {
//tuscias logikos blokas ///pats pataiso return ir undefined
}

const a = tuscia();
console.log(a);

console.log('-------------');

console.log(tuscia());
console.log(tuscia());

// console.log(tuscia());

function tuscia2() {
    return undefined;
}
console.log(tuscia2());



// function tuscia3() {
//     return; //pats pataiso ats i undefined
// }
// console.log(tuscia3());



// function duokPenkis() {
//     //graziname penkis
//     return 5;
// }
// console.log(duokPenkis());
// console.log(duokPenkis());
// console.log(duokPenkis());
// console.log(duokPenkis());
// console.log(duokPenkis());
// console.log(duokPenkis()); 

// function arVedes(){
//     return true;
// }
// console.log(arVedes()); 

// function LabasRytas(){
//     return 'Labas rytas Lietuva';
// }
// console.log(LabasRytas()); 

// console.clear(); 


const userName1 = 'Jonas';
const userAge1 = 99;

// Jonas turejo 9 jubilieju/ -s!


const user1Jubiliejai = (userAge1 - userAge1 % 10 ) /10;
const user1Str = `${userName1} turejo ${user1Jubiliejai} jubilieju/-s!`;
console.log(user1Str);

const userName2= 'Maryte';
const userAge2 = 88;


const user2Jubiliejai = (userAge2 - userAge2 % 10 ) /10;
const user2Str = `${userName2} turejo ${user2Jubiliejai} jubilieju/-s!`;
console.log(user2Str);

const userName3 = 'Petras';
const userAge3 = 55;

const user3Jubiliejai = (userAge3 - userAge3 % 10 ) /10;
const user3Str = `${userName3} turejo ${user3Jubiliejai} jubilieju/-s!`;
console.log(user3Str);

console.log('---------');

function jubiliejai(username,age ) {
    const count = (age-age%10)/10;
    return `${username} turejo ${count} jubiliejus`;
}

console.log(jubiliejai('Jonas', 99));
console.log(jubiliejai('Maryte', 66));
console.log(jubiliejai('Petras', 55));
console.log(jubiliejai('Ona', 44));

console.log(jubiliejai(666, `Demons`));

console.clear();

console.log('---------');

function studentAverage(name, marks){
    
    let totalSum = 0;
    let i = 0;
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];


    


    const average = totalSum/ marks.length;
    return ` ${name}: pazymiu vidurkis yra ${average}.`;
}

console.log(studentAverage('Jonas', [10,2,8,4,6]));
console.log(studentAverage('Maryte', [10,9,8,7,6]));
console.log(studentAverage('Petras', [5,6,7,8,9]));
console.log(studentAverage('Ona', [9,9,9,9,9]));

console.clear();

const marks2= [10, 9, 8, 7]
console.log(marks2.toString())


