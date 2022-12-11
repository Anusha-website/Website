//intocm

function inToCm(a){
  return a*2.54;
}
const intocm = inToCm(4);
console.log(intocm +'cm');

//const intocm=function(a){
//return a*2.54;
//}

//const intocm = (a)=>{
//return a*2.54;
//}

//const intocm=(a)=>a*2.54;


//cmtoin

function cmToin(x){
  return x/2.54;
}
const cmtoin = cmToin(5);
console.log(cmtoin+'in');

//const cmtoin=function(x){
//return x/2.54;
//}

//const cmtoin = (x)=>{
//return x/2.54;
//}

//const cmtoin =(x)=>x/2.54;


//kgtogms
function kgToGrams(y){
  return y*1000;
}
const kgtograms = kgToGrams(4);
console.log(kgtograms+'grams');

//const kgtograms=function(y){
//return y*1000;
//}

//const kgtograms = (y)=>{
//return y*1000;
//}

//const kgtograms=(y)=>y*1000;

//gmstokg

function gmsTokg(x){
  return x/3;
}
const gramstokg = gmsTokg(1500);
console.log(gramstokg+'kg');

//const gramstokg=function(x){
//return x/3;
//}

//const gramstokg = (x)=>{
//return x/3;
//}

//const gramstokg=(x)=>x/3;

//cmtomm
function cmTomm(x){
  return x/100;
}
const cmtomm = cmTomm(10);
console.log(cmtomm+'mm');

//const cmtomm=function(x){
//return x/100;
//}

//const cmtomm = (x)=>{
//return x/100;
//}

//const cmtomm=(x)=>x/100;

//mmtocm
function mmTocm(x){
  return x*100;
}
const mmtocm = mmTocm(10);
console.log(mmtocm+'cm');

//const mmtocm=function(x){
//return x*100;
//}

//const mmtocm = (x)=>{
//return x*100;
//}

//const mmtocm=(x)=>x*100;


let str="good developers";
str.split(" ") .forEach(word =>{
  let lowerWord=word.toLowerCase();
  console.log(lowerWord[0].toUpperCase()+lowerWord.slice(1));
});


  
