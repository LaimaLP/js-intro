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


const vietovardziai = ["Vilnius", "Kaunas", "Klaipeda", "Palanga", "Siauliai"];
console.log(vietovardziai);

console.log("Mano aplankytos vietos: ", vietovardziai);
console.log("Mano aplankytos vietos yra ", vietovardziai.length, "skirtingi miestai:", vietovardziai.toString());



