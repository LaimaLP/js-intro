console.clear();

console.log("labas");
const fruits = [];
fruits.push("a:b", "c:d");

console.log(fruits);
console.log(4 ** 2);
console.log(`...............`);

// const marks = [10, 2, 8, 4, 6];
// let totalSum = 0;
// for (let i = 0; i < marks.length; i++) {
//     totalSum += marks[i];
//     console.log(totalSum);
// }
// console.log(totalSum);
// const average = totalSum / marks.length;
// console.log(marks, 'average is', average);
console.clear();

const ages = [16, 2, 18, 99, 50];
ages.sort(function (a, b) {
  return a - b;
});
console.log(ages);
const max = ages.length;
console.log(max);
console.log(ages.length);
console.log([ages[0], ages[max], ages[max] - ages[0]]);
console.log(Math.max.apply(null, ages));

const one = "labas";
const two = "rytas";
const three = "katin";
// const
// for (let i=0; i<one.length; i++)
console.log(one[0] + two[0] + three[0]);

// let string = `apple ban`;
// console.log(string);
// let arr = string.split("");
// console.log(arr);
// console.log(arr.reverse()); //kodel nepasidare reverse?
// console.log(arr.join(""));
// console.log('----------');
// console.clear();
// let str2 = 'bananas obuolys'
// let arr2 = str2.split(' ');
// console.log(arr2);
// console.log(arr2[0] );
// let strlength = arr[0].length;
// console.log(strlength);
// for (let i=0; arr2[i].length; i++);
console.clear();

// let str2 = 'bananas obuolys kivis'
// let arr2 = str2.split(' ');

// console.log(arr2);
// console.log(arr2[0]);
// // ilgis = arr2[0].length;
// // console.log(ilgis);
// console.log(arr2[0].length);
// console.log(arr2[1]);
// console.log(arr2[1].length);
// console.log(arr2[2]);
// console.log(arr2[2].length);
// let result = arr2[0] + arr2[0].length + " "+ arr2[1] + arr2[1].length +" "+ arr2[2] + arr2[2].length;
// console.log(result);
// console.log(result.split(' '));

console.clear();

let str = ` `;
console.log(str);
let arr = str.split(" ");
console.log(arr);
console.log(arr.reverse()); //kodel nepasidare reverse?
console.log(arr.join(" "));
console.log("----------");

// let str = "The greatest victory is that which requires no battle";
// console.log(str.reverse(' '));

function reverseWords(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Reverse the order of the words in the array
  const reversedWords = words.reverse();

  // Join the reversed words back into a string with spaces
  const reversedString = reversedWords.join(" ");

  return reversedString;
}

let sarasas = [22, -6, 32, 82, 9, 25];
console.log(sarasas);
dalinasi = sarasas[2] / [2];
beLiekanos = sarasas[3] % [3];
console.log(dalinasi);
console.log(beLiekanos);

//  const result = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % i === 0) {
//       result.push(array[i]);
//     }
//   }

//   return result;

//   function multipleOfIndex(array) {
//     let result = [];
//       for (let i=0; i<array.length; i++){
//           if(array[i]%i===0){
//       result.push(array[i]);
//         }
//   }
//   return result;
//     }

//     function contamination(text, char){
//         if (text || char === " "){
//           return " ";
//         }else {
//           let mutatedText = " ";
//           for (i=0; i<text.length; i++){
//             mutatedText += char;
//           }
//        }return mutatedText;
//        }

//        function contamination(text, char){
//         if (text !== "" && char !== ""){
//           let mutatedText = " ";
//           for (i=0; i<text.length; i++){
//             mutatedText += char;
//           } return mutatedText;
//         }else {
//           return " ";
//           }
//         }

//         function findNeedle(haystack) {
//             for (let i = 0; i<haystack.length; i++){
//             haystack[i] === "needle";
//               } return `found the needle at position [i]`
//             }

//             function findNeedle(haystack) {
//                 for (let i = 0; i<haystack.length; i++){
//                if(haystack[i] === "needle"){
//                    return "found the needle at position " + [i];
//                 }
//                   }
//                 }

//                 function validateHello(greetings) {
//                     greetings = [ "hello", "ciao", "salut", "hallo",  "hola", "ahoj", "czesc"]
//                     let string;
//                     for (i=0; i<greetings.length; i++){
//                       string == grettings[i];
//                     }return true;
//                 }else{

//                 }

//                      function validateHello(greetings) {
//     greetings = [ "hello", "ciao", "salut", "hallo",  "hola", "ahoj", "czesc"]
//     let string;
//     for (i=0; i<greetings.length; i++){
//       if(string == greetings[i]){
//     return true;
//         }
//         } return false;
//   }

//   function validateHello(greetings) {
//     greetings = [ "hello", "ciao", "salut", "hallo",  "hola", "ahoj", "czesc"]
//     let string;
//     for (i=0; i<greetings.length; i++){
//       if(string == greetings[i]){
//     return true;
//         }else{
//     return false;
//   }
// }}

// function validateHello(greetings) {

//     let input = greetings.toLowerCase();
//       if(input.includes("hello")){
//          return true;
//        }else if (input.includes("ciao")){
//         return true;
//          }else if (input.includes("salut")){
//         return true;
//          }else if (input.includes("hallo")){
//         return true;
//         }else if (input.includes("hola")){
//         return true;
//          }else if (input.includes("ahoj")){
//         return true;
//             }else if (input.includes("czesc")){
//         return true;
//       }else{
//         return false;
//       }
//       }
console.clear();
let items = [];
items.push({ a: "b", c: "d" });
console.log(items);

let arr2 = [1, 2, 3, 4, 5, 6, 10];
let sum = 15;
let kiekis = 0;
for (i = 0; i < arr2.length; i++) {
  sum += arr2[i];
  kiekis++;
}
console.log(sum, kiekis);
console.log(sum / kiekis);
console.log(sum / arr2.length);

// function betterThanAverage(classPoints, yourPoints) {
//   let allPoints = classPoints.concat(yourPoints);

//   let allPointsSum = 0;
//   for (i = 0; i < allPoints.legth; i++) {
//     allPointsSum + allPoints[i];
//   }
//   let allAverage = allPointsSum / allPoints.legth;

//   let myPointsSum = 0;
//   for (i = 0; i < yourPoints.legth; i++)
//    myPointsSum + yourPoints[i];
// }
// let yourAverage = myPointsSum / yourPoints.legth;
// if (yourAverage > allAverage) {
//   return true;
// } else {
//   return false;
// }

let n = 5;
let reiksme = 5;
let arr3 = [];
console.log(n);
for (i = n; i > 0; i--) {
  arr3.push(i);
}
console.log(arr3);

let x = [3, 2, 5];
console.log(x);

let arr5 = [];
for (let i = 0; i < x.length; i++) {
  arr5.push(x[i] * 2);
}
console.log(arr5);

console.log("----");
let arr6 = ["t", "b", "h"];
console.log(arr6[0]);

let arr7 = [];
console.log(arr6);

console.log(arr6.pop());
console.log(arr6.shift());
console.log(arr6);

console.log(arr6.pop());
console.log(arr6);

console.log(arr6.pop());
console.log(arr6);
let zodis = "labas";
console.log(zodis.length);
let skaicius = -2;
console.log(skaicius.toString());
console.log(skaicius.toString().length);
console.log(skaicius.toString().split(""));
console.log(skaicius.toString().length);

// let PliusH = arr7.push(arr6.pop())
// console.log(arr7)
// console.log(arr6.pop())
// console.log(arr6.push(arr))

console.clear();
function splitAndMerge(string, separator) {
  let words = string.split(" ");
  console.log("words: ", words);

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").join(separator);
  }
  console.log("words2: ", words);
  console.log("words2: ", words.join(" "));
}
splitAndMerge("My name is John", "-");

let vienas = "labai labas,   vakaras tau, sakau, jhkjh, hjhjkj ";
console.log(vienas);
console.log(vienas.split(",", 3));

let vienas2 = "a a";
console.log(vienas2);
console.log(vienas2.split("x"));
console.log("".split("x"));
console.log(vienas2.split("x") + "".split("x"));
console.log("--------");

let tuscia = "".split("x");
console.log(tuscia);
let vienasA = vienas2.split("");
console.log(vienasA);
console.log(vienasA.concat(tuscia));

console.log("--------");

const pvz = "Labas rytas suraitytas vistos koja parasytas";
console.log(pvz.split("x"));
console.log(pvz.split("a"));
console.log(pvz.split(" "));

const pvz2 = "vasara";
const pvz2PoSplit = pvz2.split("a");
console.log(pvz2PoSplit);

console.log("sasasasas".split("a"));
console.log("sasasasas".split("s"));
// //           |       |

console.log("asd".split("x"));
console.log("x".split("x"));
console.log("asd".split("asd"));
console.log("labas".split(""));
console.log("".split("x"));
console.log("".split(""));
console.log("--------------------------");

console.log("boolean");

console.log("--------------------------");
let tekstas = "labas?";
let tekstas2 = "labukas";
console.log(tekstas);
let masyvas = ["nu"];
console.log(masyvas);

console.log(masyvas.push(tekstas));
console.log(masyvas);

console.log(masyvas.push(tekstas2));
console.log(masyvas);
console.log("--------------------------");
console.log(tekstas.slice(0, -1));
console.log("--------------------------");
console.clear();
let mark = "!";
let text = "str!ing!";
console.log(text.replaceAll("!", ""));

// https://www.codewars.com/kata/56d93f249c844788bc000002/train/javascript
// function testit(s) {
//   // Split the input string into words
//   const words = s.split(" ");

//   // Iterate through each word
//   const result = words.map((word) => {
//     // If the word has more than one letter, modify it
//     if (word.length > 1) {
//       const lastIndex = word.length - 1;
//       const uppercaseLastLetter = word[lastIndex].toUpperCase();
//       return word.slice(0, lastIndex) + uppercaseLastLetter;
//     } else {
//       // If the word has only one letter, keep it as is
//       return word;
//     }
//   });

//   // Join the modified words back into a sentence
//   return result.join(" ");
// }

// // Test cases
// Test.assertSimilar(testit(""), "", "");
// Test.assertSimilar(testit("a"), "A", "");
// Test.assertSimilar(testit("b"), "B", "");
// Test.assertSimilar(testit("a a"), "A A", "");
// Test.assertSimilar(testit("a b"), "a B", "");
// Test.assertSimilar(testit("a b c"), "a B C", "");
// Test.assertSimilar(testit("acd dca"), "acD dcA", ""); // New test case
// // Add more test cases if needed

// console.clear();
// console.log("--------")

console.clear();
let myArr = ["codewars", "flick", "code", "wars"];
console.log(myArr);

let skaiciukas = 37.5;
let skaiciukasToString = skaiciukas.toString();

console.log(skaiciukas.toString().length);

console.log(skaiciukasToString.indexOf("."));

console.log("------------");
n = 1240;
console.log(n);
let txt = n.toString();
console.log(txt);
let lastElement = txt.endsWith(0);
console.log(lastElement);
console.log(txt.slice(0, -1));
console.log(txt);
console.log(txt.indexOf(3));

let sarasiukas = ["good", "bad", "bad", "bad", "bad"];
let sarasiukas2 = [
  "good",
  "bad",
  "bad",
  "bad",
  "bad",
  "good",
  "bad",
  "bad",
  "good",
];
let sarasiukas3 = ["bad", "bad", "bad"];

function well(x) {
  let count = 0;
  let arr = [];

  for (i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      arr.push(x[i]);
      count++;
    }
    //  console.log(count)
  }
  if (arr.length == 1 || arr.length == 2) {
    return "Publish!";
  } else if (arr.length > 2) {
    return "I smell a series!";
  } else if (arr.length == 0) {
    return "Fail!";
  }
}
console.log(well(sarasiukas));

console.log(arr.length);
console.log(well(sarasiukas2));
console.log(arr.length);
console.log(well(sarasiukas3));
console.log(arr.length);
console.log("--------");

let d = 21;
function solution(d) {
  let suma = 0;
  // let krepsiukas = [];
  for (let i = 0; i <= d; i++) {
    if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
      suma += i;
    }
  }
  console.log(suma);
}
solution(d);

masyvas = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
];

let o = "";
console.log(masyvas.toString());

for (let i = 0; i < masyvas.length; i++) {
  o += masyvas[i].toString() + "\\n";
}

console.log(o);
console.log(masyvas.toString());

console.clear();

let names = [];
console.log(names.length);

function likes(names) {
  if (names.length === 0) {
    return `no one likes this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and 2 others like this`;
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]}  like this`;
  } else if (names.length == 1) {
    return `${names[0]} likes this`;
  }
}
console.log(likes(names));

console.log("labas");
let integer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(
  `(${integer[0]}${integer[1]}${integer[2]}) ${integer[3]}${integer[4]}${integer[5]}-${integer[6]}${integer[7]}${integer[8]}${integer[9]}`
);

let A = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
let B = A.sort();
B.toString();
console.log(B);
console.log(B);
let mas = "";
let count = 0;

for (let i = 0; i < B.length; i++) {
  if (B[i] == B[i + 1]) {
    B[i];
    count++;
  }
}

console.log("mas:", B);
console.log("count:", count);

// function FindDubli(A){
//   let renku = []
//   for(let i=0; i<A.length; i++){
//     for (let j=0; j<A.length; i++){
//           if(A[i]==A[j]){
//             renku.push(A[i])

//       }
//     }
//       return renku
//     }
//   }

// console.log("funkcijos:", FindDubli(A))

function findOdd(arr) {
  var result,
    num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}

let arr12 = [-5, 10, 9, 8, 9, 8, 5, 3, 5, 5, -2];
console.log(`letsatsakymas:`, findOdd(arr12));

console.clear();
console.clear();

let a = 5;
a = 7;
console.log(a);

for (let i = 1; i < 5; i++) {
  console.log(i);
}

for (let i = 5; i < 0; i--) {
  console.log(i);
}

console.log("labas");

function isOpposite(s1, s2) {
  const mazosiosS1 = s1.toLowerCase();
  const mazosiosS2 = s2.toLowerCase();
  if (s1 !== "" && s1 !== s2) {
    if (s1.length === s2.length) {
      if (mazosiosS1 === mazosiosS2) {
      }
    }
    return true;
  } else {
    return false;
  }
}

const r = 1;
const g = 2;
const b = 101;

function colorOf(r, g, b) {
  r.toString(16);
}

console.log("labukas", r.toString(16));
console.log("labukas", g.toString(16));
console.log("labukas", b.toString(16));

console.log("labukas", r.toLocaleString(16));
console.log("labukas", g.toLocaleString(16));
console.log("labukas", b.toLocaleString(16));

let seq = [1, 2, 3, 4, 6, 7, 8, 9];

//   function findMissing(seq){
//     let  paskutinis = seq[seq.length-1]
// let x = (paskutinis-seq[0])/(seq.length-1);
// let prarastasis = 0
// for(i=0;i<seq.length; i++){
//   if(seq[i+1] !== seq[i]+x){
//     prarastasis=  seq[i+1]-x
//   }
// }return prarastasis
// }
//   console.log("prarastasis", findMissing(seq2))

console.clear();
console.log("veikia", "----------");

// const s = "We often read book, a word hidden in the book."

// function testit(s){
//   let string ="";
//   let worduSkaicius = 0
//  let s2 = s.toLowerCase();
//     for(let i=0; i<s.length; i++){
//       if(s2[i] ==="w" && !string.includes("w")){
//       string+= s2[i]
//       console.log("zodis:", string)
//       }
//       if(s2[i] ==="o" && !string.includes("o")&& string.includes("w")){
//         string+= s2[i]
//         console.log("zodis:", string)
//       }
//       if(s2[i] ==="r" && !string.includes("r")&& string.includes("w") && string.includes("o")){
//         string+= s2[i]
//         console.log("zodis:", string)
//       }
//       if(s2[i] ==="d" && !string.includes("d")&& string.includes("w") && string.includes("o") && string.includes("r")){
//         string+= s2[i]
//         console.log("zodis:", string)
//       }

//       if(string === "word"){
//         worduSkaicius++;
//         string="";

//       }
//     }
//     return worduSkaicius
// }
// console.log(testit(s))
console.log("------veikia------");

let animals = [
  { name: "Cat", numberOfLegs: 4 },
  { name: "Snake", numberOfLegs: 0 },
  { name: "Dog", numberOfLegs: 4 },
  { name: "Pig", numberOfLegs: 4 },
  { name: "Human", numberOfLegs: 2 },
  { name: "Bird", numberOfLegs: 2 },
];
console.log("original animals:", animals);

// sort by name
animals.sort((a, b) => {
  const nameA = a.name;
  const nameB = b.name;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
});

//sort by value
let sortedAnimals = animals.sort((a, b) => a.numberOfLegs - b.numberOfLegs);
console.log("sorted:", sortedAnimals);

// function sortAnimal(animals) {
//   console.log("gaunam:",animals)

//   const list = [];

//   for (i=0;i<animals.length; i++){
//     list.push(animals[i].numberOfLegs)
//     list.push(animals[i].name)
//   }
//   console.log("list:" , list)
//     return list
// }

// console.log(sortAnimal(animals))
 console.clear()

let moneyIn= "£5"
function changeMe(moneyIn) {
  if(moneyIn=="£5"){
    let n = 5*100/20
    let coin = "20p "
    return  coin.repeat(n).toString()
  }
}

console.log(changeMe(moneyIn))

function changeMe(moneyIn){
  if(moneyIn=="£5"){
    let n = 5*100/20
    let coin = "20p "
    return coin.repeat(n)
  }else if(moneyIn=="£2"){
   let m = 2*100/20;
    return coin.repeat(m)
  }else if(moneyIn=="£1"){
   let p = 1*100/20;
    return coin.repeat(p)
    }else  if(moneyIn=="50p"){
       return "20p 20p 10p"
      }else if(moneyIn=="20p"){
        return "20p"
  }else
    return moneyIn
}

console.log("veikia","20p ".repeat(3))
let h = 11;


s1="qWavd" 
 s2="QwAVD"

s1="RiTNHRGYmWa"
s2="riTNHRGyMWa"

s1="yeQP"  
s2="YEQp"

function isOpposite(s1,s2){
  const mazosiosS1 =s1.toLowerCase();
  const mazosiosS2 = s2.toLowerCase()
  
  if (s1 ==='' && s1 === s2){
    return false
    }
  if (mazosiosS1!==mazosiosS2){
    return false
    }
  for (i=0; i<s1.length; i++){
    if( (/[A-Z]/.test(s1[i]) === /[a-z]/.test(s2[i])) &&  (/[A-Z]/.test(s2[i]) === /[a-z]/.test(s1[i]))) {
   return true
    }else{
   return false;
   }
  }
}


let stringiukai = ["mano", "meile", "vasara"]
console.log("stringiukai",stringiukai.reverse() )
console.log("stringiukai vienas", stringiukai[2].split("").reverse().join("") )


// function wordsReverser(string){
//   var words = string.split(' ');
//   var result = [];
//   for(var i = 0; i < words.length; i ++){
//     result.push(words[i].split('').reverse().join(''));
//   }  
//   return result.join(' ');
// }


// let str6 = "Reverse this string, please!"
// console.log("str6:",str6)


// function reverse(str6){
  
//   let arr= str6.split(" ");
//   let reveArr=[];
//   console.log("arr:",arr)
  
//   for(let i=0; i<arr.length; i++){
//     if(i%2!==0){
//       reveArr.push(arr[i].reverse());
//     }else{
//       reveArr.push(arr[i])
//     }
//   }
//   return reveArr.join(" ")
// }

// console.log(reverse(str6))


console.clear()
 let test = "labutelaitis mano zmogau"
 console.log("test:", test)
 let Atest=test.split(" ")
 console.log("Atest:", Atest)
 console.log("pirmo pirmas:", Atest[0][0].toUpperCase())
 console.log("pirmo galas", Atest[0].slice(1))
 console.log("sujungiam:", Atest[0][0].toUpperCase()+Atest[0].slice(1))