/*
NUMBER

- teigiami/neigiami
- sveikieji / desimtainiai
- normalus / nenormalus

Inicijavimo budas:
- const (default)
- let (jei kinta info)
- var (niekada)


Matematiniai operatoriai:
+, -, *, /, **, %
+=, -=, *=, /=, **=, %=

*/



const amzius = 99;
let pinigine = 0;
var minusas = -7.56;


console.log(amzius);
console.log(pinigine);
console.log(minusas);

const x1 = 1;
const x2 = 2;
const x3 = 3;
const x4 = 4;
const x5 = 5;


const n1 = 7;
const n2 = 5;
// ??? 12 = 7 + 5
const sum = n1 + n2;
console.log(sum);

const diff = n1 - n2;
console.log(diff);

const multi = n1 * n2;
console.log(multi);

const div = n1 / n2;
console.log(div);

const complex = (2 + 2) * 2;
console.log(complex);

const exp1 = 2 + 2;
const exp2 = 2 * 2;
const exp3 = 2 ** 2;

console.log(exp1, exp2, exp3);

const exp4 = 2 ** 0;
const exp5 = 2 ** 1;
const exp6 = 2 ** 2;
const exp7 = 2 ** 3;
const exp8 = 2 ** 4;

console.log(exp4, exp5, exp6, exp7, exp8);

console.log(2 + 2 * 2, amzius, 3+3*3, pinigine);
const exp9 = 3**3;
console.log(exp9);

// Nenormalus skaiciai, nera skaicius, tik savoka, konceptas. Infinitty
const begalybe = Infinity;
const minusBegalybe = -Infinity;

const x = 5 / 0;
console.log(x);

const k= -5 / 0;
console.log(k);

//not-a-number - NaN

const n= NaN;
console.log(n, NaN);
console.log(7*"8");
console.log(7+"8");

const liekana = 7 % 5;
console.log(liekana)

console.clear()


let wallet = 0;
console.log(`wallet:`, wallet);

wallet = wallet + 5;
console.log(`wallet:`, wallet);

wallet += 5;
wallet += 5;
wallet += 5;
console.log(`wallet:`, wallet);

console.log('------------');

wallet = wallet -2;
console.log(`walet:`, wallet);

wallet -= 2;
wallet -= 2;
wallet -= 2;
console.log(`walet:`, wallet);

wallet = wallet * 4;
console.log(`walet:`, wallet);

wallet += 2;
wallet *= 4;
console.log(`walet:`, wallet);

wallet **= 2;
console.log(`walet:`, wallet);

wallet /= 10000;
console.log(`walet:`, wallet);


const skaicius = 256;
const daliklis = 10;
const liekana3 = skaicius % daliklis;
console.log(`liekana:`, liekana3);
const sveikaDalis = (skaicius- liekana3)/ daliklis;
console.log(sveikaDalis);

console.log(sveikaDalis, `*`, daliklis, '+', liekana3, '=', skaicius);

console.clear();

let index = 0;
console.log(`index`, index);

index = index + 1; 
console.log(`index:`, index);

index += 1; 
console.log(`index:`, index);

index++;
console.log(`index:`, index);

++index;
console.log(`index:`, index);


let i = 0;
console.log(i); // -> 0
console.log(i++); //-> 1
console.log(i); // -> 1
console.log(i++); // -> 2
console.log(i); //-> 2
console.log(i++);
console.log(i);
console.log(i++);
console.log(i);
console.log(i++);
console.log(i); 
console.log('------------'); 

let i2 = 0;
console.log(i2);
console.log(++i2);
console.log(i2);
console.log(++i2);
console.log(i2);
console.log(++i2);
console.log(i2);
console.log(++i2);
console.log(i2);
console.log(++i2);
console.log(i2);

console.log('------------');

let m2 = 0;
console.log(--m2); // 0 -> -1
console.log(--m2); // -1 -> -2
console.log(--m2);
console.log(--m2);
console.log(--m2);
console.log(m2);
    
    console.log(`--------`);

    let m = 0;
console.log(m--); // 0 -> -1
console.log(`--------`);

console.log(m--); // -1 -> -2
console.log(m--);
console.log(m--);
console.log(m--);
console.log(m);

console.clear();

//     let klausimas = 10;
//     console.log(++klausimas++);