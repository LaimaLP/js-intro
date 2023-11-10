console.clear()
console.log("labas")


const skaiciai = [10,2,8,4,6];

let suma = 0; 
for(skaicius of skaiciai){

    suma+=skaicius 
    

}

console.log("suma:", suma)

let average = suma/skaiciai.length;
console.log("average", average)


let mediana = 0
let mediana2  = []
let  middleIndex
let ilgis = skaiciai.length


function FunMediana(skaiciai){
    const sorted = skaiciai.sort((a,b)=>a-b);
    const middleIndex = Math.floor(sorted.length / 2)
    if (sorted.length % 2 === 0) {
   
        return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
      } else {
      
        return sorted[middleIndex];
      }
    }
    FunMediana(skaiciai)

    console.log("mediana:", FunMediana(skaiciai));
   
//     skaiciai.sort((a,b)=>a-b);
//     const middleIndex2 = Math.floor(sorted.length / 2)

//   const mediana2 = skaiciai.length % 2 ? skaiciai[middleIndex]: ((skaiciai[middleIndex-1] +skaiciai[middleIndex])/2)