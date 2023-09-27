// Operatoriai:
// Visi:
// Naudojami:
// Nenaudojami:

const g = 7;
const h = 77;

if (g>h){
    console.log('Daugiau')
}else{
    console.log('Ne daugiau')
}

if (g<h){
    console.log('maziau')
}else{
    console.log('Ne maziau')
}

if (g==h){
    console.log('lygu')
}else{
    console.log('Ne lygu')
}

if (g===h){
    console.log('lygu')
}else{
    console.log('Ne lygu')
} 

if (g>=h){
    console.log('daugiau ar lygu')
}else{
    console.log('maziau')
    console.log('ne daugiau ir ne lygu')
} 

if (g!=h){
    console.log('nelygu')
}else{
    console.log('lygu')

} 

// !== vs != lygina tik reiksmes
// === vs == patikrina tipus

if (7==='7'){
    console.log(`aaaaaaaaa`)
}else{
    console.log(`bbbbbbb`)
}