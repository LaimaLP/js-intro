console.clear();

const O = 10
const marks0 = [10, 2, 8,4,6];
const marks1 = [10, true, false, null, undefined, 2, O, 'a', 8,4,6];
const marks2 = [];
const marks3 = [10, 2, 3.14, 8, 2.727, 0, 80, 4, 6];
const marks4 = [10, 2, NaN, Infinity, -Infinity, 8, 4, 6];
const marks5 = 'labas';
const marks6 = [];




function marksAverage(marksList){
    if (!Array.isArray(marksList)){
        return 'Error: duok masyva';
    }
    if(marksList.length<1){
        return "Error: duok ne tuscia masyva";
    }

let totalSum =0;
let count = 0;

for(let i=0; i<marksList.length; i++){

     /* 1) variantas
    if(typeof marksList[i] === 'number'){
        totalSum +=marksList[i];
        count++;
     }
}
const average = totalSum/count;
return average;
console.log(average)
*/

     //2) variantas. ^ 1 ir 2 variantai daro ta pati

    if(typeof marksList[i] !== 'number'){
        continue;
    }
    if(typeof marksList[i] > 10){
        continue;
    }

    // '3.14' .includes('.') ->true
    //"3".split(".").length ->["3"]->1
    // '3.14'   .split('.').length -> ["3", "14"] ->2
    // parseInt('3.14')===3.14 -> 3 ===3.14->false
    //parseFloat('3.14)===3.14 -> 3.14 true
    // if (('' + marksList[i]).split("."). length> 1){
    //     continue;
    // }
    // if (parseInt('' + marksList[i]) !== marksList[i]){
    //    continue;
    // }
    // if(!Number.isInteger(marksList[i])){
    //     continue
    // }
    
    if (('' + marksList[i]).includes(".")){
          continue;
    }
    if(marksList[i] <1){
        continue;
    }

    totalSum += marksList[i];
    count++;
}

const average = totalSum/count
return count ? average: "Neiskaityta";
}

//Kada praskipinam?

/* for(let i =0; i<marksList.length; i++){
    if(typeof marksList[i] !=='number'
        || marksList[i] >10
        || marksList[i]<1
        || markList[i]% !==0
        || !Number/isInteger(marksList[i])){
            continue
        }
        totalSum += marksList[i];
        count++;
}
*/

console.log(marksAverage(marks0), '->', 6);
console.log(marksAverage(marks1), '->', 6);
console.log(marksAverage(marks2), '->', 'Neiskaityta');
console.log(marksAverage(marks3), '->', '6');
console.log(marksAverage(marks4), '->', '6');
console.log(marksAverage(marks5));
console.log(marksAverage(marks6));
