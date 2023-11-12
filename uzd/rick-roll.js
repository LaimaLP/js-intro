const text = `
We're no strangers to love
You know the rules and so do I (do I)
A full commitment's what I'm thinking of
You wouldn't get this from any other guy

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've known each other for so long
Your heart's been aching, but you're too shy to say it (say it)
Inside, we both know what's been going on (going on)
We know the game and we're gonna play it

And if you ask me how I'm feeling
Don't tell me you're too blind to see

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

We've known each other for so long
Your heart's been aching, but you're too shy to say it (to say it)
Inside, we both know what's been going on (going on)
We know the game and we're gonna play it

I just wanna tell you how I'm feeling
Gotta make you understand

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you

Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you`;

// 1 Rasti ne tuščių eilučių kiekį;
// 2 Rasti žodžių kiekį;
// 3 Rasti ilgiausia eilutę ir gražinti jos tekstą;
// 4 Rasti ilgiausios eilutės raidžių kiekį;
// 5 Rasti dažniausiai pasikartojančia raidę (nepriklausomai ar ji didžioji, ar mažoji);
// 6 Rasti dažniausiai pasikartojantį žodį (nepriklausomai ar jis su didžiosiomis, ar mažosiomis);
// 7 Rasti unikalių raidžių kiekį;
// 8 Rasti unikalių žodžių kiekį;
// 9 Rasti žodžių su apostrofu kiekį;
console.clear();

// 1 Rasti ne tuščių eilučių kiekį;




let rows;
function nonEmptyRows(text) {
  rows = text.split("\n");

  let count = 0;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].length !== 0) {
      count++;
    }
  }
  return count;
}

console.log("1. nonEmptyRows:", nonEmptyRows(text));

// 2 Rasti žodžių kiekį;

let textWithoutSymbolsArr = text
  .replaceAll("\n", " ")
  .replaceAll("'", "")
  .replaceAll("(", "")
  .replaceAll(")", "")
  .replaceAll(",", "")
  .toLowerCase()
  .split(" "); 

function kiekZodziu(text) {

  let emptyCount = 0;

  for (i = 0; i < textWithoutSymbolsArr.length; i++) {
    if (textWithoutSymbolsArr[i] === "") {
      emptyCount++;
    }
  }
  return textWithoutSymbolsArr.length - emptyCount;
}
console.log("2. word count", kiekZodziu(text));

// 3 Rasti ilgiausia eilutę ir gražinti jos tekstą;

let longest;
function longestRow(rows) {
  longest = "";

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].length > longest.length) {
      longest = rows[i];
    }
  }
  return longest;
}

console.log("3. Longest row text:", longestRow(rows));

// 4 Rasti ilgiausios eilutės raidžių kiekį;
let withoutSymbol;
function wordsInLongest(longest) {
  withoutSymbol = longest
    .replaceAll(" ", "")
    .replaceAll("'", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(",", "");
  return withoutSymbol.length;

}
console.log("4. longest row words length:", wordsInLongest(longest));

// 5 Rasti dažniausiai pasikartojančia raidę (nepriklausomai ar ji didžioji, ar mažoji);

// let textWithoutSymbolsArr = text
//   .replaceAll("\n", " ")
//   .replaceAll("'", "")
//   .replaceAll("(", "")
//   .replaceAll(")", "")
//   .replaceAll(",", "")
//   .toLowerCase()
//   .split(" ");

// console.log("--------------------------textWithoutSymbols", textWithoutSymbolsArr);

const songObjOfLetters = {};

myText = textWithoutSymbolsArr.join("");

// console.log("myText:", myText)

for (const letter of myText) {
  if (songObjOfLetters[letter]) {
    songObjOfLetters[letter] += 1;
  } else {
    songObjOfLetters[letter] = 1;
  }
}
// console.log("songObjOfLetters:", songObjOfLetters)
let maxLetter = "";
let maxCount = 0;

for (const letter in songObjOfLetters) {
  if (songObjOfLetters[letter] > maxCount) {
    maxLetter = letter;
    maxCount = songObjOfLetters[letter];
  }
}
console.log("5.>>>>", maxLetter, maxCount);

// 6 Rasti dažniausiai pasikartojantį žodį (nepriklausomai ar jis su didžiosiomis, ar mažosiomis);

// console.clear();
// console.log("beN:",beN)

const songObjOfWords = {};

for (word of textWithoutSymbolsArr) {
  if (songObjOfWords[word]) {
    songObjOfWords[word] += 1;
  } else {
    songObjOfWords[word] = 1;
  }
}

// console.log("songObjOfWords", songObjOfWords)

let maxWord = "";
let maxCountWord = 0;
for (const word in songObjOfWords) {
  if (songObjOfWords[word] > maxCountWord) {
    maxWord = word;
    maxCountWord = songObjOfWords[word];
  }
}
console.log("6.>>>>", maxWord, maxCountWord);

// 7 Rasti unikalių raidžių kiekį;

// console.log("songObj:",songObj)
const uniqueLettersCount = Object.keys(songObjOfLetters).length;

console.log("7. uniqueLettersCount", uniqueLettersCount);

//8
const uniqueWordsCount = Object.keys(songObjOfWords).length;

console.log("8. uniqueWordsCount:", uniqueWordsCount);

function howMuchApostrophe(text) {
  let apostropheCount = 0;
  for(const words of text){
  if (words.includes("'")) {
    apostropheCount++;
  }
}
  return apostropheCount
}

console.log("8. apostropheCount:", howMuchApostrophe(text));

// Non empty lines -> 54
// Word count -> 353
// Longest line -> Your heart's been aching, but you're too shy to say it (to say it)
// Longest line character count -> 48
// Most common character -> n
// Most common word -> gonna
// Unique characters -> 23
// Unique words -> 77
// Words with apostrophe -> 19
