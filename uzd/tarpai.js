console.clear();
/*
Duodamas tekstas.
Jame yra tarpai.
Ka reikia padaryti?
- pradzioje nebutu tarpu;
- pabaigoje nebutu tarpu;
- jei tarp zodziu yra is eiles einanciu daugiau nei vienas tarpas, tai turi likti tik 1 tarpas;
*/
console.clear();
console.log('---------')
const str1 = '    labas    ';
const ats1 = 'labas';

const str2 = '    labas               rytas               tau    ';
const ats2 = 'labas rytas tau';
// const bandymas2 = str2.trim().replaceAll(' ', '_')
// const bandymas2 = str2.trim().replaceAll(' ', '')
// const bandymas2 = str2.trim().replaceAll('  ', ' ')  du tarpai -> i viena
// const bandymas2 = str2.trim()
//     .replaceAll('  ', ' ')
//     .replaceAll('  ', ' ')
//     .replaceAll('  ', ' ')
//     .replaceAll('  ', ' ')
//     .replaceAll('  ', ' ')
let bandymas2 = str2.trim();

for (;bandymas2.includes('  ');){
    bandymas2=bandymas2.replaceAll('  ', ' ');
}

console.log(`"${bandymas2}"`, ats2);




const str3 = 'ka   tu?   ka vakare?';
const ats3 = 'ka tu? ka vakare?';

function isvalymas(text) {
    let ats = text.trim();

    for (; ats.includes('  ');) {
        ats = ats.replaceAll('  ', ' ');
    }

    return ats;
}

console.log('---------');
console.log(isvalymas(str1));
console.log(ats1);
console.log('---------');
console.log(isvalymas(str2));
console.log(ats2);
console.log('---------');
console.log(isvalymas(str3));
console.log(ats3);
console.log('---------');
console.log(isvalymas('            abra      ka dabra'));
console.log('abra ka dabra');

// let str4 = " labas     as esu   krabas  "
// let ats4 = "labas as esu krabas"

// let galaiBeTarpu = str4.trim();
// console.log(galaiBeTarpu);

// function naikinuTarpus(Mex){
//     let ats5 = Mex.trim();
//  for ( ; ats5.includes('  '); ) {
//     ats5 = ats5.replaceAll('  ', ' ');
//  } 
//     return ats5
//  }

//  console.log(naikinuTarpus(str4))

//  function isvalymas(text) {
//     let ats = text.trim();

//     for (; ats.includes('  ');) {
//         ats = ats.replaceAll('  ', ' ');
//     }

//     return ats;
// }

manoVardas = 'laima pileliene';
console.log('laima pileliene');




console.log(manoVardas.replace(" ","."));
// console.log(manoVardas[0][0]);
// console.log(manoVardas[1][0]);
console.log(manoVardas.indexOf(' '));
console.log(manoVardas[0]);
console.log(manoVardas[manoVardas.indexOf(' ')+1]);
console.log(manoVardas.toUpperCase());
console.log(manoVardas[0].concat(manoVardas[manoVardas.indexOf(' ')+1]))


