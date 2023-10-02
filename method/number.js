console.log(7)
console.log(7)
console.log(7)
console.log(7)
console.log(isFinite(5))
console.log(isFinite(3.14))
console.log(isFinite(0+1+0.3)) // skaitmenimis isreiskiami skaiciai


console.log(isFinite(NaN))
console.log(isFinite(Infinity))
console.log(isFinite(-Infinity))

const a = '5'
if(isFinite(a)){
    console.log('Taip');
}else{
    console.log('Ne');
}
console.clear();
console.log(Number.isFinite(5))
console.log(isFinite(5))

console.log(Number.isInteger(5))
console.log(Number.isInteger(5.2))
console.log(Number.isInteger(NaN))
console.log(Number.isInteger(Infinity))
console.log(Number.isInteger(-Infinity))

console.clear()
// const b = 7;
// if(isFinite(b)){
//     if(Number.isInteger(b)){
//     console.log('Normalus skaicius');
//  } else{
//         console.log('Ne normalus skaicius: NaN arba Infinity')
//     }



console.log(Number.parseInt(false));
console.log(Number.parseInt([]));
console.log(Number.parseInt(''))
console.log(Number.parseInt('123'))
console.log(Number.parseInt('asd123'))
console.log(Number.parseInt('123asd'))
console.log(Number.parseInt('123asd456'))
console.log(Number.parseInt('789.9'))
console.log(Number.parseInt('Infinity'))


console.log(`---------`);
console.log(parseFloat(''));
console.log(parseFloat(''));
console.log(parseFloat('789.3'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('asd789.3'));


console.log(`---------`);
console.log(isNaN(4))
console.log(isNaN(NaN))


//Instance method
console.clear();
console.log(`---------`);

const kaina = 3.14;
console.log(kaina.toFixed());
console.log(kaina.toFixed(1));
console.log(kaina.toFixed(5));

const keistasSkaicius = 0.1+ 0.2;
console.log(keistasSkaicius)
console.log(keistasSkaicius.toFixed(6))
const keistasSkaicius2 = keistasSkaicius.toFixed(6);
console.log(keistasSkaicius2)

const keistasSkaicius3= parseInt(keistasSkaicius2);
console.log(keistasSkaicius3);

const keistasSkaicius4=parseFloat(keistasSkaicius2);
console.log(keistasSkaicius4)


const keistasSkaicius5='1.23';
console.log(keistasSkaicius5);

const keistasSkaicius6=+keistasSkaicius2
console.log(keistasSkaicius6);

const c = 6.999999999999999;
console.log(c)
console.log(c.toFixed(5));

const d = 5.6789;
console.log(d.toFixed(6))
console.log(d.toFixed(5))
console.log(d.toFixed(4))
console.log(d.toFixed(3))

const e = 5.6789;
console.log(e.toFixed(6))
console.log(e.toFixed(5))
console.log(e.toFixed(4))
console.log(e.toFixed(3))

