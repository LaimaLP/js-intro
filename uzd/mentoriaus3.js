/*
1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
5. Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. Sukurkite du kintamuosius ir naudodamiesi funkcija jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.
6. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.*/


// 1.
console.clear(); 
console.clear(); 


const name = "Johny"
const surname = "Depp"
function whichShorter(name, surname){
    return name<surname? name:surname
}
console.log(whichShorter(name, surname))

//2.
const myName = "Laima";
const mySurname = "Pileliene"
const birthDay = 1993
const date = 2023

function myAge(birthDay, date){
    return date-birthDay
}

console.log("My age: ", myAge(birthDay, date));
console.log(`Aš esu ${myName} ${mySurname}. Man yra ${myAge(birthDay, date)} metaų.`)

//3.
const thirdString = `${name.slice(-3)}${surname.slice(-3)}`;
console.log(thirdString)

//4

const str = " “Once upon a time in hollywood” "
console.log(str)
const allLowerOChange = str.replaceAll("o", "*");
console.log(allLowerOChange)
const allUpperOChange = allLowerOChange.replaceAll("O","*");
console.log(allUpperOChange);

const strLower = str.toLowerCase()
const changeAllO =strLower.replaceAll("o","*")
console.log(changeAllO);
//o jei tai butu keli sakiniai su didziosiomis/mazosiomis kaip tokiu atveju vienu replaceAll pakeisti?

//5


const random1 = (Math.floor(Math.random(2)*2)+1);
console.log(random1)
const random2 = (Math.floor(Math.random(2)*2)+1);
console.log(random2)
const random3 = (Math.floor(Math.random(2)*2)+1);
console.log(random3)
const random4 = (Math.floor(Math.random(2)*2)+1);
console.log(random4)

const randomArr = [];
randomArr.push(random1);
randomArr.push(random2);
randomArr.push(random3);
randomArr.push(random4);

console.log("Random arr:", randomArr)
let randomZeros = 0;
let randomOnes = 0;
let randomTwos = 0;

for(i=0; i<randomArr.length; i++){
if(randomArr[i] === 0){
     randomZeros++
}
if(randomArr[i] === 1){
    randomOnes++
}
if(randomArr[i] === 2){
    randomTwos++
}
}
console.log("0 yra:", randomZeros)
console.log("1 yra:", randomOnes)
console.log("2 yra:", randomTwos)

//6

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


console.log("Random yra:", rand(0, 4))

const kintamasis1 = rand(0, 4);
const kintamasis2 = rand(0, 4);
console.log("kintamasis1:",kintamasis1);
console.log("kintamasis2:", kintamasis2)

 function whichLarger(kintamasis1, kintamasis2){
return kintamasis1>kintamasis2? (kintamasis1/kintamasis2).toFixed(2): (kintamasis2/kintamasis1).toFixed(2);
 }
 console.log("larger divided by smaller:", whichLarger(kintamasis1, kintamasis2))

 //7
 const kintamasis3 = rand(0, 25);
 const kintamasis4 = rand(0, 25);
 const kintamasis5 = rand(0, 25);
 console.log("kintamasis3:", kintamasis3);
 console.log("kintamasis4:", kintamasis4);
 console.log("kintamasis5:", kintamasis5);
 const kintamujuArr = []
 kintamujuArr.push(kintamasis3)
 kintamujuArr.push(kintamasis4)
 kintamujuArr.push(kintamasis5)
console.log("kintamujuArr:", kintamujuArr)

 function middleValue(kintamujuArr){
    kintamujuArr.sort(function(a, b){return a-b});
    return kintamujuArr[1]
 }
 console.log("Mediana:", middleValue(kintamujuArr))



 // 8

 const a = "Johny";
 const b = "Depp";
 const c = a[0]+b[0]
 console.log(c)

 //9 
                //  0    1    2     3    4   5     6    7   8     9   10   11   12   13   14   15   16   17   18   19  20    21   22
 const latinABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "X", "Y", "Z"]

 function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("skaicius:", rand(0,22))
const firstLetter = latinABC[rand(0,22)];
console.log("Pirma raide", firstLetter)
const secondLetter = latinABC[rand(0,22)];
const thirdLetter = latinABC[rand(0,22)];


const randomString1 = firstLetter+secondLetter+thirdLetter
const randomString2 = firstLetter+secondLetter+thirdLetter
const randomString3 = firstLetter+secondLetter+thirdLetter


console.log(randomString1)
console.log(randomString2)
console.log(randomString3)





