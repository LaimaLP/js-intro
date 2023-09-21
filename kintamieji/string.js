/*
STRING

Inicijavimas kabutemis: "", ' '

teksto ilgis: 'kintamasis'.length
*/

console.clear();
const txt1 = "tekstas 1";
console.log(txt1);

const txt2 = 'tekstas 2';
console.log(txt2);

console.log(txt1, txt2);

const txt3 = "labas"
console.log(txt3);

//Vienaguba kabute(')
const kabute1 = "Vienguba kabute (')."
console.log(kabute1);

//Dviguba kabute("")
const kabute2 = 'Dviguba kabute (").'
console.log(kabute2);

//Vienaguba kabute(') ir Dviguba kabutes("")
const kabute12 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabute12);

const kabute122 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabute122);

const kabute123 = 'Vienguba (\'labas\') ir dviguba (\") kabutes.';
console.log(kabute123);

const back = '\\\\';
console.log(back)

const back2 = '\\';
console.log(back2)

// \n - new line (nusileidzia zemyn)
// r = return (grizta i eilutes pradzia)
const formatuotasTekstas = "Labas \n\rrytas, \n\rLietuva ";
console.log(formatuotasTekstas)

/* \n
Labas\n 
     rytas 
          Lietuva
*/

/* \r
Labas\rrytas\rLietuva
*/

const gg = 'gggggggggggggggg\raaa';
console.log(gg)

const lrl = "Labas\n\r\
rytas,\n\r\
Lietuva";
console.log(lrl);

console.clear();

const vardas = 'Chuck';
console.log(vardas, '=', vardas.length, 'simboliai');
const pavarde = "Norris"

// const fullname = vardas  + " " + pavarde;
// console.log(fullname);

// //Labas rytas, Lietuva!
// const labas = "Labas";
// const parosMetas = "vakaras";
// const valstybe = "Lietuva";

// const lrl2 = labas + ' ' + rytas + ','+ lietuva + "!"
// console.log(lrl2);

// const lrl3 = `${labas} ${parosMetas}, ${valstybe}!`;
// console.log(lrl3);

console.clear();




const n1 = 5+7;
console.log(n1);


const n2 = 5 / '7';
console.log(n2);
