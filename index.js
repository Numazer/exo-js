//let monCanard="donald";
//let x=1;


//const nombreDePate=2;
//const nombreDaile=2;
const lettre='AZERTYUPQSDFGHJKLMWXCVBN';
const nombre='0123456789';


//function canard(nombreDepate, nombreDaile){
//let maCanette="daisay";
//let mesCarnards=maCanette+=monCanard;

//return nombreDePate+nombreDaile;
//}

//console.log(canard(nombreDePate, nombreDaile));

//function f() {
//    let x=2;
//    console.log (x);
//}

//console.log(x);
//f();

//function g() {}

let stockplaque=[];
let plaque="";

//function immatriculation(){

//for(let i=0;i<2;i++) {
    //plaque+=lettre.charAt(Math.floor(Math.random()*lettre.length));
//}

//plaque+="-";

//for(let i=0;i<3;i++) {
    //plaque+=nombre.charAt(Math.floor(Math.random()*nombre.length));
//}

//plaque+="-";


//for(let i=0;i<2;i++) {
    //plaque+=lettre.charAt(Math.floor(Math.random()*lettre.length));

//}

//return plaque;

//}

function generateLetter(){
    let plaque="";
    for(let i=0;i<2;i++) {
        plaque+=lettre.charAt(Math.floor(Math.random()*lettre.length));
      
    }
    return plaque;
}



function generateNumber(){
    let plaque="-";
    for(let i=0;i<3;i++) {
        plaque+=nombre.charAt(Math.floor(Math.random()*nombre.length));
    }
    return plaque +="-";
}



//console.log(plaque);


let nbplaque = prompt("combien en voulez vous");

for(let i=0;i<nbplaque;i++) {
    let dplaque = generateLetter() + generateNumber () + generateLetter ();
    stockplaque.push(dplaque);
}
console.log(stockplaque);