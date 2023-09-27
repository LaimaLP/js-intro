console.clear();

console.log("----------");

const myInput = -5.555;

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
          if (myInput % 1 > 0 || (myInput < 0 && myInput % 1 > 0) || myInput % 1 < 0) {
            console.log(
              `${myInput} nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.`
            );
          }
        }
      }
    }
  }
}

console.log("----------");

// ANTRAS VARIANTAS

const x = "vienas";
if (x === 0) {
  console.log(`${x} irgi yra lyginis skaicius!`);
} else if (x < 0 && x % 2 === 0) {
  console.log(`${x} yra neigiamas lyginis skaicius.`);
} else if (x % 2 === 0) {
  console.log(`${x} yra lyginis skaicius.`);
} else if (x % 2 > 0 && x % 1 === 0) {
  console.log(`${x} nera lyginis skaicius.`);
} else if (x < 0 && x % 1 === 0) {
  console.log(` ${x} yra neigiamas ir nera lyginis skaicius`);
} else {
  console.log(`"${x}" nera tikras skaicius, patikslinkite`);
}
// else if ((x < 0 && x % 1 > 0) || x % 1 < 0) {
//   console.log(
//     `${x} nera lyginis skaicius, nes desimtainiai skaiciai niekada nebuna lyginiai.`
//   );
// }

// const day = 1;

// if (day % 7 == 1) {
//   console.log(`Pirmadienis`);
// }else if (day % 7 == 2) {
//   console.log(`Antradienis`);
// } else if (day % 7 == 3) {
//   console.log(`Treciadienis!`);
// } else if (day % 7 == 4) {
//   console.log(`Ketvirtadienis!`);
// } else if (day % 7 == 5) {
//   console.log(`Penktadienis!`);
// } else if (day % 7 == 6) {
//   console.log(`Sestadienis!`);
// } else {
//   console.log(`Tokia diena neegzistuoja!`);
// }
