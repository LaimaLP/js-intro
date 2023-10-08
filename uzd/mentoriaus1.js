// 1 Užduotis

// Markas ir Johnas bando palyginti savo KMI (kūno masės indeksą), kuris yra
// apskaičiuojamas pagal formulę:
// KMI = masė / ūgis ** 2 = masė / (ūgis * ūgis) (masė kg ir aukštis metrais).
// Jūsų užduotys:
// 1. Išsaugokite Marko ir Jono masę ir ūgį kintamaisiais
// 2. Apskaičiuokite abiejų jų KMI naudodami formulę 
// 3. Sukurkite true false kintamąjį „markHigherBMI“ su informacija apie ar Marko KMI didesnis nei Jono.
 
// Bandymo duomenys:

// § 1 duomenys: sveria 78 kg ir yra 1,69 m ūgio. Jonas sveria 92 kg ir yra 1,95 ūgio

// m aukščio.

// § 2 duomenys: sveria 95 kg ir yra 1,88 m ūgio. Jonas sveria 85 kg ir yra 1,76 ūgio

// m aukščio.
console.clear();
// 1. Išsaugokite Marko ir Jono masę ir ūgį kintamaisiais:
let markoUgis = 1.69;
let markoSvoris = 78;
let jonoUgis = 1.95;
let jonoSvoris = 92;

let markoUgis2 = 1.88;
let markoSvoris2 = 95;
let jonoUgis2 = 1.76;
let jonoSvoris2 = 85;

// 2. Apskaičiuokite abiejų jų KMI naudodami formulę 

let markoKMI = markoSvoris/markoUgis**2;
console.log(markoKMI)
let jonoKMI = jonoSvoris/jonoUgis**2;
console.log(jonoKMI)

let markoKMI2 = markoSvoris2/markoUgis2**2;
console.log(markoKMI2)
let jonoKMI2 = jonoSvoris2/jonoUgis2**2;
console.log(jonoKMI2)

// 3. Sukurkite true false kintamąjį „markHigherBMI“ su informacija apie ar Marko KMI didesnis nei Jono.
let atsakymas = markoKMI>jonoKMI;
let atsakymas2 = markoKMI2>jonoKMI2;


// 2 uzuoduotis

console.log(atsakymas, "Marko KMI didesnis nei Jono!");
console.log(atsakymas2, "Jono KMI yra didesnis nei Marko!");

console.log(atsakymas, `Marko KMI (${markoKMI}) didesnis nei Jono KMI (${jonoKMI}!)`);
console.log(atsakymas2, `Jono KMI (${jonoKMI2}) yra didesnis nei Marko KMI !(${markoKMI2})`);

//3 uzduotis


// let delfinuVidurkis = (delfinuTaskai[0]+delfinuTaskai[1]+delfinuTaskai[2])/delfinuTaskai.length
// let koaluVidurkis = (koalosTaskai[0]+koalosTaskai[1]+koalosTaskai[2])/koalosTaskai.length
// console.log(`Delfinu vidurkis:  ${delfinuVidurkis.toFixed(2)}`);
// console.log(`Koalu vidurkis1: ${koaluVidurkis.toFixed(2)}`);

// 2. Palyginkite komandos balų vidurkį, kad nustatytumėte konkurso nugalėtoją.
// ir atsispausdinkite į konsolę. Nepamirškite, kad gali būti lygios, todėl išbandykite tai
// taip pat (lygiosios reiškia, kad jie turi tą patį vidutinį balą)

let delfinuTaskai = [96, 108, 89];
let koalosTaskai = [88, 91, 110];

let delfinuSum = 0;
let delfinuCount = 0;

let koalosSum = 0;
let koalosCount = 0;


// let delfinuBalai = [97, 112, 101];
// let koalosBalai = [109, 95, 123];
// function whoseWin(delfinuTaskai, koalosTaskai){
   
    for(let i=0; i<delfinuTaskai.length; i++){
         delfinuSum+= delfinuTaskai[i]
        delfinuCount ++
    }
   
     for(let i=0; i<koalosTaskai.length; i++){
        koalosSum+= koalosTaskai[i]
        koalosCount++
        console.log(koalosSum)
    } 
// }
        const  delfinuAverage = delfinuSum/delfinuCount
        console.log((delfinuAverage), "Delfinu vidurkis")
        const koalosAverage = koalosSum/koalosCount
      console.log((koalosAverage), "Koalos vidurkis")


    // if(koalosAverage>delfinuAverage){
    //     return "Koalos laimejo"
    // }else{
    //     "Delfinai laimejo"
    // }
// }

// console.log(whoseWin(delfinuBalai, koalosBalai));


console.log('labas')

// let lyginu = delfinuVidurkis>koaluVidurkis

// function kienoDidesnisVidurkis (delfinuTaskai, koalosTaskai){
//     let delfinuTaskai = [96, 108, 89];
//     let koalosTaskai = [88, 91, 110];
//     let delfinuVidurkis = (delfinuTaskai[0]+delfinuTaskai[1]+delfinuTaskai[2])/delfinuTaskai.length
//     let koaluVidurkis = (koalosTaskai[0]+koalosTaskai[1]+koalosTaskai[2])/koalosTaskai.length


//      if(delfinuVidurkis>koaluVidurkis){
//          console.log("Delfinai laimejo");
//     }else if(koaluVidurkis>delfinuVidurkis){
//         console.log("Koalos laimejo");
// }

// }







