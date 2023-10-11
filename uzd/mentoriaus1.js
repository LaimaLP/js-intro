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
console.log("-------------------------")
function KMI(ugis, svoris){
    return +(svoris/(ugis**2)).toFixed(2);
 }
 console.log('Marko KMI::::::: ', KMI(markoUgis, markoSvoris))

let markoKMI = markoSvoris/markoUgis**2;
console.log("Marko KMI: ", markoKMI.toFixed(2))
let jonoKMI = jonoSvoris/jonoUgis**2;
console.log("Jono KMI: ",jonoKMI.toFixed(2))

let markoKMI2 = markoSvoris2/markoUgis2**2;
console.log("Marko2 KMI: ",markoKMI2.toFixed(2))
let jonoKMI2 = jonoSvoris2/jonoUgis2**2;
console.log("Jono2 KMI: ",jonoKMI2.toFixed(2))

if(markoKMI>jonoKMI){
console.log("markHigher - true")
   

}


// 3. Sukurkite true false kintamąjį „markHigherBMI“ su informacija apie ar Marko KMI didesnis nei Jono.
let atsakymas = markoKMI>jonoKMI;
let atsakymas2 = markoKMI2>jonoKMI2;


console.log(atsakymas, `Marko KMI (${markoKMI.toFixed(2)}) didesnis nei Jono KMI (${jonoKMI.toFixed(2)}!)`);
console.log(atsakymas2, `Jono KMI2 (${jonoKMI2.toFixed(2)}) yra didesnis nei Marko2 KMI !(${markoKMI2.toFixed(2)})`);


///////////////////////////////////////////////////////////////
//3 uzduotis
console.log('-----------------------------------------------------------')

// let delfinuVidurkis = (delfinuTaskai[0]+delfinuTaskai[1]+delfinuTaskai[2])/delfinuTaskai.length
// let koaluVidurkis = (koalosTaskai[0]+koalosTaskai[1]+koalosTaskai[2])/koalosTaskai.length
// console.log(`Delfinu vidurkis:  ${delfinuVidurkis.toFixed(2)}`);
// console.log(`Koalu vidurkis1: ${koaluVidurkis.toFixed(2)}`);

// 2. Palyginkite komandos balų vidurkį, kad nustatytumėte konkurso nugalėtoją.
// ir atsispausdinkite į konsolę. Nepamirškite, kad gali būti lygios, todėl išbandykite tai
// taip pat (lygiosios reiškia, kad jie turi tą patį vidutinį balą)

let delfinuTaskai = [96, 108, 89];
let koalosTaskai = [88, 91, 110];

let delfinuBalai = [97, 112, 101];
let koalosBalai = [109, 95, 123];

function getAverage(taskai){
   let sum = 0;

       for(let i=0; i<taskai.length; i++){
         sum+= taskai[i]
    }
        return   Math.round(sum/taskai.length) 
}       

//delfinu vidurkis po pirmu rungtyniu
 const delfinu1Vidurkis = getAverage(delfinuTaskai);
 console.log(delfinu1Vidurkis)
 console.log("Delfinu1 vidurkis" , getAverage(delfinuTaskai)) 
//koalos vidurkis po pirmu rungtyniu
 const koalos1Vidurkis = getAverage(koalosTaskai)
 console.log(koalos1Vidurkis)
 console.log("Koalos1 vidurkis", getAverage(koalosTaskai))

 //delfinu ir koalu vidurkis po antru rungtyniu
 console.log("Delfinu2 vidurkis", getAverage(delfinuBalai))
 console.log("Koalos2 vidurkis", getAverage(koalosBalai))


 function getWinner(delfinai, koalos){
  if(delfinai>koalos && delfinai>100){
    return "delfinai laimejo"
  }else if(delfinai<koalos &&koalos>100){
    return "koalos laimejo"
  }else if(delfinai>100 && koalos>100&& delfinai==koalos){
    return "lygiosios"
  }else{
    return "niekas nelaimejo"
  }
}

console.log("Po pirmu rungtyniu:", getWinner(delfinu1Vidurkis, koalos1Vidurkis))
console.log("Po antru rungtyniu:", getWinner(getAverage(delfinuBalai), getAverage(koalosBalai)))


console.log('labas')



console.clear();

// Evenas nori sukurti labai paprastą arbatpinigių skaičiuotuvą, kai jis eina valgyti į 
// restoraną. Jo šalyje įprasta duoti 15 % arbatpinigių, jei sąskaitos vertė yra nuo 50 iki
// 300. 
// Jei vertė skiriasi, arbatpinigiai yra 20%.
// Jūsų užduotys:
	
// Apskaičiuokite arbatpinigių, priklausomai nuo sąskaitos vertės. Sukurkite kintamąjį pavadinimu „Tip“.
// 	Neleidžiama naudoti if/else teiginio  (Jei jums taip lengviau, galite
// pradėti nuo if/else teiginio, tada pabandykite jį konvertuoti į ternery
// operator!)

// 	Į konsole atspausdinkite eilutę, kurioje yra sąskaitos vertė, arbatpinigiai ir galutinė vertė
// (sąskaita + arbatpinigiai). Pavyzdys: „Sąskaita buvo 275, arbatpinigiai 41,25, o bendra vertė
// 316,25"
// Bandymo duomenys:
// § 1 duomenys: patikrinkite sąskaitos reikšmes 275, 40 ir 430


const bill1=275;
const bill2=40;
const bill3=430;
// 1)
function tips(bill){
  if(bill>50 && bill<300)
    return bill*0.15;
    return bill*0.2

}
console.log(tips(bill1))
console.log(tips(bill2))
console.log(tips(bill3))

// 2) 
function tips2(bill){
return 50<bill && bill<300?  bill*0.15:bill*0.2
}
console.log(tips2(bill1))
console.log(tips2(bill2))
console.log(tips2(bill3))


// 3)
const tips3 = function(bill){
  return 50<bill && bill<300?  bill*0.15:bill*0.2
}
console.log(tips3(bill1));
console.log(tips3(bill2));
console.log(tips3(bill3));


// 4)
const tips4= (bill) => 50<bill && bill<300?  bill*0.15:bill*0.2
console.log(tips4(bill1))
console.log(tips4(bill2))
console.log(tips4(bill3))
console.log(typeof tips4(bill1))
console.log(typeof bill1)


console.log(`Saskaita buvo ${bill1}, arbatpinigiai ${tips4(bill1)}, o bendra verte ${(bill1 + tips4(bill1))}`)
console.log(`Saskaita buvo ${bill2}, arbatpinigiai ${tips4(bill2)}, o bendra verte ${(bill2 + tips4(bill2))}`)
console.log(`Saskaita buvo ${bill3}, arbatpinigiai ${tips4(bill3)}, o bendra verte ${(bill3 + tips4(bill3))}`)
