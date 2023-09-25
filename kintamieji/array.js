console.clear();

const tuscias = [];
console.log(tuscias, tuscias.length);

//          index: 0  1  2  3  4  5  6
const pazymiai = [10, 2, 8, 4, 6, 9, 7, 5];
console.log(pazymiai, 'sudaro', pazymiai.length, 'skaiciai');

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentai);

const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log(antrasPazymys);

const treciasPazymys = pazymiai[2];
console.log(treciasPazymys);

const pazymioPozicija = pazymiai.length - 1;
const paskutinisPazymys = pazymiai[pazymioPozicija];
console.log(paskutinisPazymys);

// Masyvas pazymiu.
// Suskaiciuoji pazymiu vidurki ir isvesti kaip sakini:
// "Studento pazymiu vidurkis yra 7."

// Masyvas vietovardziu.
// Suformuojat sakini:
// "Mano aplankytos vietos: Vieta1, Vieta2, Vieta3."

console.clear();

const pazymiai2 = [7, 9, 8, 10, 5, 2, 10, 6, 3, 1];
console.log(pazymiai2);
console.log(pazymiai2.length);

const sumPazymiai2 = pazymiai2[0] + pazymiai2[1] + pazymiai2[2] + pazymiai2[3] + pazymiai2[4] + pazymiai2[5] + pazymiai2[6] + pazymiai2[7] + pazymiai2[8] + pazymiai2[9];
console.log("Bendra pazymiu suma yra", sumPazymiai2);
console.log("Studento pazymiu vidurkis yra", sumPazymiai2/(pazymiai.length))

const marks = [10, 2, 8, 4, 6];


// let marksSum = 0
// marksSum = marksSum + marks[0];
// marksSum = marksSum + marks[1];
// marksSum = marksSum + marks[2];
// marksSum = marksSum + marks[3];
// marksSum = marksSum + marks[4];


let marksSum = 0;
marksSum  += marks[0];
marksSum  += marks[1];
marksSum  += marks[2];
marksSum  += marks[3];
marksSum  += marks[4];


// x  = x + y

const marksAverage = marksSum / marks.length;
const studentMarks = `Studento pazymiu vidurkis yra ${marksAverage}.`;
console.log(studentMarks)





const vietovardziai = ["Vilnius", "Kaunas", "Klaipeda", "Palanga", "Siauliai"];
console.log(vietovardziai);

console.log("Mano aplankytos vietos: ", vietovardziai);
console.log("Mano aplankytos vietos yra ", vietovardziai.length, "skirtingi miestai:", vietovardziai.toString());

console.clear();
console.log(`------------------`);
console.log(`------------------`);


const places = ['Siaures asigalis', 'Menulis', 'Pusiaujas'];
// const placesStr = `${places[0]}, ${places[1]}, ${places[2]}`;
let placesStr = '';
placesStr += places[0];
placesStr += ',';
placesStr += places[1];
placesStr += ',';
placesStr += places[2];

const placesSentence = `Mano aplankytis vietos: ${placesStr}.`;
console.log(placesSentence);


console.log(`------------------`);


let a = 5;
let x = 7;
const c = 3
// x = x + ++a; //13
// x = x++ +a; // 12

//     7     5
 x = (x++) +a; // 12; x = 8
 x =x + (++a);//13; x = 8;

//    7      6
 x = (x++) +a; // 18

console.log(x);

console.clear();
const colors = ['geltona', 'zalia', 'raudona'];

console.log(colors[1]);

colors[1] = 777;
console.log(colors);

colors[1] = 'ŽALIA';
console.log(colors);

colors[1] = 'žalia';
console.log(colors);

let name = 'Chuck';
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[14]);
console.log(name.length);

name = 'Huck';
console.log(name);