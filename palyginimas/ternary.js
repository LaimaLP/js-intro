console.clear();
//jeigu pilnametis -> uzeik!
//jeigu ne - -> Sorry...


const amzius = 19;
const limitas = 18;

let zinute1 = "";





if (amzius < limitas){
    zinute = 'Sorry...';
}else{
    zinute = 'Uzeik!';
}
console.log('>>>', zinute);

// 

let zinute2 = "Uzeik!";

if (amzius < limitas){
    zinute2 = 'Sorry...';
}
console.log('>>>', zinute2);

const zinute3 = amzius < limitas ?  "Sorry...": "Uzeik";
console.log('>>>', zinute3);

const q1 = 0> 1
            ? 2
            : 3;
console.log(q1);
const q2 = 0< 1
            ? 2
            : 3;

console.log(q2);

const q3 = 0 === 1
                ? 2
                : 3;
console.log(q3);

const q4 = 0> 1
              ? 2
                ? 3
                : 4
            : 5;
console.log(q4);

const q5 = 0< 1
                ? 2
                    ? 3
                    : 4
                : 5;
console.log(q5);

const q6 = 0 > 1
                ? 2
                    ? 3
                    : 4
                : 5
                    ? 6
                    :7;
console.log(q6);