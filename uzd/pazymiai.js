console.clear();

const O = 10
const marks0 = [10, 2, 8,4,6];
const marks1 = [10, true, false, null, undefined, 2, O, 'a', 8,4,6];
const marks2 = [];
const marks3 = [10, 2, 3.14, 8, 2.727, 0, 80, 4,6, ];



function marksAverage(marksList){
    let totalSum =0;
let count = 0;
for(let i=0; i<marksList.length; i++){
      // 1)
    // if(typeof marksList[i] === 'number'){
    //     totalSum +=marksList[i];
    //     count++;
    
    
    //2)

    if(typeof marksList[i] !== 'number'){
        continue;
    }
    if(typeof marksList[i] > 10){
        continue;
    }
    if(typeof marksList[i] === 0){
        continue;
    }

   let namas='asd';
   namas.to


        // includes ('.') -> true

        // '3.'.split('.') -> ["3"] -> 1
        // '3.14'.split('.') -> ["3", "14"] ->2
        
        //parseInt('3.14') -> 3 === 3.14 -> false
        //parseFloat('3.14') -> 3.14 -> true

        //isInteger(markList[i])
         if(parseInt(' ' + marksList[i]) !== marksList[i]) {
        continue;
        }

         totalSum += marksList[i];
        count++;
        const average = totalSum/count;


// return count === 0 ? 'Neiskaityta': average;
// return count > 0 ? 'Neiskaityta': average;
return count ?  average: 'Neiskaityta'
}




console.log(marksAverage(marks0), '->', 6);
console.log(marksAverage(marks1), '->', 6);
console.log(marksAverage(marks2), '->', 'Neiskaityta');
console.log(marksAverage(marks3), '->', '6');

