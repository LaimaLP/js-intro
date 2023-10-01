console.clear();

console.log('labas')
const fruits = [];
fruits.push('a:b', 'c:d');

console.log(fruits);
console.log(4**2)
console.log(`...............`)





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

const ages = [16,2, 18, 99, 50];
ages.sort(function(a, b){return a - b});
console.log(ages)
const max = ages.length
console.log(max);
console.log(ages.length)
console.log([ages[0], ages[max], (ages[max]-ages[0])] )
console.log(Math.max.apply(null, ages));


const one ="labas" 
const two = "rytas"
const three = "katin"
// const 
// for (let i=0; i<one.length; i++)
 console.log(one[0]+two[0]+three[0])


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
console.log('----------');



// let str = "The greatest victory is that which requires no battle";
// console.log(str.reverse(' '));

function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(' ');
  
    // Reverse the order of the words in the array
    const reversedWords = words.reverse();
  
    // Join the reversed words back into a string with spaces
    const reversedString = reversedWords.join(' ');
  
    return reversedString;
  }

 let sarasas=  [22, -6, 32, 82, 9, 25];
 console.log(sarasas);
 dalinasi = sarasas[2]/[2];
 beLiekanos = sarasas[3]%[3];
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
 items.push({a:"b", c:"d"});
   console.log(items)