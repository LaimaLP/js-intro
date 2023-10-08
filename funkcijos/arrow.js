console.clear();

const n1 = 7;
const n2 = 5;


// function declaration
function suma(a,b){
    return a+b;
}
console.log(`${n1} + ${n2} = ${suma(n1,n2)}`);


// function skirtumas(a,b){
//     return a-b;
// }
// console.log(`${n1} - ${n2} = ${skirtumas(n1,n2)}`);

// kintamajam pirskiti anonimine funkcija
const skirtumas = function (a,b){
    return a-b;
}
console.log(`${n1} - ${n2} = ${skirtumas(n1,n2)}`);

//arrow (rodyklines) function
const sandauga =  (a,b) => {
    return a*b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1,n2)}`);


// arrow function
//jeigu, logikos bloke yra tik 1 procedura (statement)
//tai galime nerasyti:{return}
const dalmuo =  (a, b) =>  a/b;
console.log(`${n1} / ${n2} = ${dalmuo(n1,n2)}`);

//arrow function
//jei paramentru bloke - 1 parametras, galima nerasyti : ()

const kvadratu = a =>  a**2;

console.log(`${n1} **2  = ${kvadratu(n1)}`);
console.log(`${n2} **2  = ${kvadratu(n2)}`);

// funkcija gauna zodi ir grazina tik pirma raide
const pirmaRaide = zodis => zodis[0]

console.log(pirmaRaide(5))

function firstLetter(str) {
    if(typeof str!== 'string'){
        return 'Error: first param has to be a string type.'
    }if (str.length ===0 ){
    return 'Error: first param has to be non empty string'
    }
    return str[0];
}

const firstLetter5 = str => {
    if(typeof str!== 'string'){
        return 'Error: first param has to be a string type.'
    }
    
    if (str.length ===0 ){
    return 'Error: first param has to be non empty string'
    }

    return str[0];
}
console.log(firstLetter5("Labas"))

const firstLetter6 = str => {
    const msg = typeof str !== 'string'
        ? 'Error: first param has to be a string type.'
        : str.length ===0
            ? 'Error: first param has to be non empty string'
        : str[0];
        return msg
}
//atminties lasteles pasalinimas, vienkartines --> ir dar riestinius ir return pasalinau
const firstLetter7 = str => 
    typeof str !== 'string'
        ? 'Error: first param has to be a string type.'
        : str.length ===0
            ? 'Error: first param has to be non empty string'
             : str[0];
        
const errors = {
    notString: 'Error: first param has to be a string type.',
    empty: 'Error: first param has to be non empty string'
};


             const firstLetter8 = str => typeof str !== 'string'
                 ? errors.notString
                 : str.length
                     ? str[0]
                     : errors.empty;
                      



console.log(firstLetter6(""))
console.log(firstLetter6(5))
console.log(firstLetter6("Labas"))
console.log(firstLetter7(""))
console.log(firstLetter7(5))
console.log(firstLetter7("Labas"))
console.log(firstLetter8(""))
console.log(firstLetter8(5))
console.log(firstLetter8("Labas"))