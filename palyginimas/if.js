/*
IF - palyginimo sakinys/salyga

Palyginimo operatoriai:
-visi: >, <, ==, ===, >=, <=, !=, !==
-naudotini:
-nenaudotini: ==, !=

Loginiai operatoriai:
&&, ||, !

Kodo sablonai:
if (){}
if () {} else {}
if () {} else if () {}
if () {}... else if () {} ...else {}

*/

if (4 > 2) {
  console.log(`4 yra daugiau uz 2`);
}

if (5 < 0) {
  console.log(`5 yra maziau uz 0`);
}

if (true) {
  console.log(true);
}

if (false) {
  console.log(false);
}

// 0+1  2   3   4  5    6   7
// 7+1  9  10  11  12   13  14
//14+1  16  17  18  19  20  21
// 21+1  23 24  25  26  27  28

const day = 14;

if (day % 7 == 1) {
  console.log(`Pirmadienis`);
}
if (day % 7 == 2) {
  console.log(`Antradienis`);
} else if (day % 7 == 3) {
  console.log(`Treciadienis!`);
} else if (day % 7 == 4) {
  console.log(`Ketvirtadienis!`);
} else if (day % 7 == 5) {
  console.log(`Penktadienis!`);
} else if (day % 7 == 6) {
  console.log(`Sestadienis!`);
} else {
  console.log(`Tokia diena neegzistuoja!`);
}

console.clear();

// const diena = 8;

// if (diena === 1) {
//     console.log('Pirmadienis');
// } else {
//     if (diena === 2) {
//         console.log('Antradienis');
//     } else {
//         if (diena === 3) {
//             console.log('Treciadienis');
//         } else {
//             if (diena === 4) {
//                 console.log('Ketvirtadienis');
//             } else {
//                 if (diena === 5) {
//                     console.log('Penktadienis');
//                 } else {
//                     if (diena === 6) {
//                         console.log('Sestadienis');
//                     } else {
//                         if (diena === 7) {
//                             console.log('Sekmadienis');
//                         } else {
//                             console.log('Tokia diena neegzistuoja!');
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// Kodo nestinimas

const diena = 5;

if (diena === 1) {
  console.log(`Pirmadienis`);
} else {
  if (diena === 2) {
    console.log(`Antradienis`);
  } else {
    if (diena === 3) {
      console.log(`Treciadienis`);
    } else {
      if (diena === 4) {
        console.log(`Ketvirtadienis`);
      } else {
        console.log(`Tokia diena neegzistuoja`);
      }
    }
  }
}

/*
Gali 
*/

const parosMetas = `diena`;
const arLyja = false;
const temp = 25;
const kadaSilta = 20;
const arAsSuStriuke = true;

if (parosMetas === "diena" && arLyja === true && temp >= kadaSilta) {
  console.log("Einam sokti lietuje!");
} else if (parosMetas === "diena" && arLyja === false) {
  console.log(`Eiline diena rojuje`);
} else if (parosMetas === "naktis" && arLyja === true) {
  console.log(`Sedim namie!`);
} else if (parosMetas === "naktis" && arLyja === false) {
  console.log(`Sedim namie!`);
}

if (parosMetas === "diena") {
  if (arLyja) {
    if (temp >= kadaSilta) {
      console.log(`Einam sokti lietuje!`);
    } else {
      console.log(`Galim eiti paziureti zvaigzdziu`);
    }
  } else {
    if (arLyja) {
      console.log(`Sedim namie!`);
    } else {
      console.log(`Galim eiti paziureti zvaigzdziu`);
    }
  }
}

console.clear();
const g = 7;
const h = "saukee";

if (g !== h) {
  console.log("ne lygu");
} else {
  console.log("lygu");
}

// !== vc !=

const user = {
  name: "Jonas",
  age: 99,
  isMarried: true,
};
user.name; // kuomet key vientisas tekstas
user["name"];

const abc = {
  65: "a",
};

if (abc[65] === "a") {
  console.log("aaaaaaa");
} else {
  console.log(`bbbbbbbb`);
}

const w = "a";
e = "b";

// if('a'>'b'){
//     console.log('daugiau');

// }else{
//     console.log('${w} yra daugiau uz ${e}')
// } else {
//     console.log(`a yra maziau arba lugu uz b`)
// }

// ! true
// !false

if (!true) {
  console.log("gg");
} else {
  console.log("fail....");
}

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

//Namu darbas

// 0 irgi yra lyginis skaicius!

// 4 yra lyginis skaicius.

// -4 yra neigiamas lyginis skaicius.

// 3 nera lyginis skaicius.

// -3 nera neigiamas lyginis skaicius.

// 3.14 nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.

// -3.14 nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.

console.clear();

console.log(-5 % 2);

console.log("----------");

const myInput = -3;

if (myInput === 0) {
  console.log(`${myInput} irgi yra lyginis skaicius!`);
} else {
  if (myInput < 0 && myInput % 2 === 0) {
    console.log(`${myInput} yra neigiamas lyginis skaicius.`);
  } else {
    if (myInput % 2 === 0) {
      console.log(`${myInput} yra lyginis skaicius.`);
    } else {
      if (myInput % 2 > 0 && myInput % 1 === 0) {
        console.log(`${myInput} nera lyginis skaicius.`);
      } else {
        if (myInput < 0 && myInput % 1 === 0) {
          console.log(` ${myInput} yra neigiamas ir nera lyginis skaicius`);
        } else {
          if (myInput % 1 > 0) {
            console.log(
              `${myInput} nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.`
            );
          } else {
            if ((myInput < 0 && myInput % 1 > 0) || myInput % 1 < 0) {
              console.log(
                `${myInput} nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.`
              );
            }
          }
        }
      }
    }
  }
}
console.log("----------");
// }else{
// console.log(`nera lyginis skaicius.`);

// console.log(`yra neigiamas lyginis skaicius.`)
