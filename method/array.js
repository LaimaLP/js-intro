console.clear();

console.log([10, 2, 8, 4, 6]);
console.log([10, 2, 8, 4, 6].length);
console.log([10, 2, 8, 4, 6][2]);
console.log([10, 2, 8, 4, 6][-1]);

console.log([10, 2, 8, 4, 6].at(2));
console.log([10, 2, 8, 4, 6].at(-2));

const a1 = [1, 2];
const a2 = [3, 4];
const a12 = a1.concat(a2);
console.log(a1, a2, a12);

const a111 = a1.concat(a1, a1, a1);
console.log(a111)


console.clear()

const marks = [10, 2, 8, 4, 6];
console.log(marks.includes(10));

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students.includes('Maryte'))
console.log(students.includes('maryte')) //tiesiog egsist or not

console.log(marks.indexOf(10)); // ar egzistuoja ir kur
console.log(marks.indexOf(2));

console.log(marks.indexOf(8));

console.log(marks.indexOf(-5));

console.log(marks.indexOf(6));

console.log(marks.indexOf(5));

console.log(marks.indexOf('Maryte'));
console.log(marks.indexOf('laima'));

console.clear();

console.log(typeof 5); //naudingas primityvioms reiksmes
console.log(typeof 'asd');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray(5))
console.log(Array.isArray('asd'));
console.log(Array.isArray(true));
console.log(Array.isArray(null));
console.log(Array.isArray({}));
console.log(Array.isArray([]));

console.log(Array.isArray([]));
console.log(Array.isArray([1,2,3]));
console.log(Array.isArray([1, 'lsls'])); //duomenu valydacijojee, butina prisiminti sita! Array is array


const abc = ['a', 'b', 'c', 'e', 'f']
const abcJoin = abc.join();
const abcJoin2 = abc.join('-');


console.log(abcJoin, typeof abcJoin);
console.log(abcJoin2)

console.log('----')
const str ='labukas'
const arr=[5,3,6,7];

console.log(str.slice(2))
console.log('str')




console.clear();
console.clear();

const flowers = [];
console.log(flowers)
flowers.push('kardelis')
console.log(flowers)

flowers.push('roze')
console.log(flowers);

flowers.push('tulpe')
console.log(flowers)

flowers.push('narcizas')
console.log(flowers)

flowers.pop();
console.log(flowers)

flowers.shift();
console.log(flowers)

flowers.unshift('ruta');
console.log(flowers)


console.log(flowers.reverse())