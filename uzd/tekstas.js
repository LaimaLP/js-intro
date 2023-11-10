console.clear()

const tekstas1 = "vasara";
const tekstas2 = "pavasaris";
const tekstas3 = "labas rytas";
const tekstas4 = "pipiriukas";



// const unikalios1 = ['v' ,'a', 's', 'a', 'r']
// const kiekis1= [1,3,1,1]
// const max1 =3
// const maxIndex1 = 1
// const dazniausiaRaide = "a"


// function repeated(text){
//     const unikalios1 = []
// }


const abc ={};

// abc["a"] = 3
// abc["s"] = 1
// abc["v"] = 1
// abc["r"] = 1


for(const letter of tekstas1){
    if(abc[letter]){
        abc[letter]+= 1
    }else{
    abc[letter] = 1;
    }
}
console.log(abc)
let maxLetter = ' '
let maxCount = 0
for(const letter in abc){
    console.log(letter, abc[letter]);

    if(abc[letter]>maxCount) {

        maxLetter = letter;
        maxCount = abc[letter];
    }
    
}


console.log(maxLetter, maxCount)


