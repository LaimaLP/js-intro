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

// Rasti ne tuščių eilučių kiekį;
// Rasti žodžių kiekį;
// Rasti ilgiausia eilutę ir gražinti jos tekstą;
// Rasti ilgiausios eilutės raidžių kiekį;
// Rasti dažniausiai pasikartojančia raidę (nepriklausomai ar ji didžioji, ar mažoji);
// Rasti dažniausiai pasikartojantį žodį (nepriklausomai ar jis su didžiosiomis, ar mažosiomis);
// Rasti unikalių raidžių kiekį;
// Rasti unikalių žodžių kiekį;
// Rasti žodžių su apostrofu kiekį;
console.clear();

// const eilutes = text.split("\n");
// console.log(eilutes);
// console.log("ilgis", eilutes.length);

console.log("----------------");
let rows;
function emptyRows(text) {
  rows = text.split("\n");
  //   console.log("rows", rows);

  let allLength = rows.length;

  let count = 0;
  for (let i = 0; i < allLength; i++) {
    if (rows[i].length !== 0) {
      count++;
    }
  }
  return count;
}
emptyRows(text);
console.log("count", emptyRows(text));

let beN = text.replaceAll("\n", " ").split(" ");

console.log("beN:", beN.length);

function kiekZodziu(text) {
  let beN = text.replaceAll("\n", " ").split(" ");
  let count = 0;

  for (i = 0; i < beN.length; i++) {
    if (beN[i] === "") {
      count++;
    }
  }
  return beN.length - count;
}
console.log("kiekZodziu", kiekZodziu(text));

// console.log(rows)

function longestRow(text) {
  rows = text.split("\n");

  let longest = rows[0].length;

  for (let i = 1; i < rows.length; i++) {
    if (rows[i].length > longest) {
      longest = rows[i].length;
    }
  }
  return longest;
  // console.log(rows)
}

console.log("ats:", longestRow(text));

// Non empty lines -> 54
// Word count -> 353
// Longest line -> Your heart's been aching, but you're too shy to say it (to say it)
// Longest line character count -> 48
// Most common character -> n
// Most common word -> gonna
// Unique characters -> 23
// Unique words -> 77
// Words with apostrophe -> 19
