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

console.clear()

const bill1=275;
const bill2=40;
const bill3=430;

// 1)
function tips(bill){
  if(bill>=50 && bill<=300)
    return bill*0.15;
    return bill*0.2
}
console.log(tips(bill1))
console.log(tips(bill2))
console.log(tips(bill3))


// 2) 
function tips2(bill){
return 50<=bill && bill<=300?  bill*0.15:bill*0.2
}
console.log(tips2(bill1))
console.log(tips2(bill2))
console.log(tips2(bill3))




// 3)
const tips3 = function(bill){
  return 50<=bill && bill<=300?  bill*0.15:bill*0.2
}
console.log(tips3(bill1));
console.log(tips3(bill2));
console.log(tips3(bill3));




// 4)
const tips4= (bill) => 50<=bill && bill<=300?  bill*0.15:bill*0.2

console.log(tips4(bill1))
console.log(tips4(bill2))
console.log(tips4(bill3))
console.log(typeof tips4(bill1))
console.log(typeof bill1)


console.log(`Saskaita buvo ${bill1}, arbatpinigiai ${tips4(bill1)}, o bendra verte ${(bill1 + tips4(bill1))}`)
console.log(`Saskaita buvo ${bill2}, arbatpinigiai ${tips4(bill2)}, o bendra verte ${(bill2 + tips4(bill2))}`)
console.log(`Saskaita buvo ${bill3}, arbatpinigiai ${tips4(bill3)}, o bendra verte ${(bill3 + tips4(bill3))}`)
 
const arr = [59, 1, 10, 1, 11, 22 ]
const arr2 = [25, 12, 23, 20, 20]
 
function avr(params) {
    let sum = 0

       for (let i = 0; i < params.length; i++) {
       sum += params[i];
       
    }
     return  average = sum/params.length
}

const group1 = avr(arr)

const group2 = avr(arr2)

 

console.log(group1, group2); 