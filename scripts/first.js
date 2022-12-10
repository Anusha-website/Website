//Arthimatic operators
//let a=5;
//let b=12;
//let addition=a+b
//let substartion=a-b
//let mutiplication=a*b
//let division=a/b
//let modulos=a%b
//console.log(addition,substartion,mutiplication,division,modulos);

//Assignment operator
 //let x=7;
 //let y=9;
 //console.log(x+=y,x-=y,x*=y,x/=y,x%=y,x**=y);

 //logical operators
//logical  And operator
//let age = 20;
//if(age>13 && age<=19){
    //console.log(`you are a "teenager".`)
//} else if(age>=19 && age<27){
   //console.log(`"you are an "adult"`)
//}else{console.log("you are not a teenager or adult")}

// logical OR operator
//let Num=8;
//let num1=10;
//console.log(Num>num1 || Num<num1);

//logical not operator
//let three=3;
//let seven=7;
//console.log(!(three>seven && three<seven));

//Ternary
//let val = (8<5) ?"True":"False";
//console.log(val);

// incriment and decriment
//let N = 5;
//console.log(N++);//5
//console.log(++N);//7
//console.log(N--);//7
//console.log(++N);//7
//console.log(--N);//6
//console.log(N);//6

//switch case
//let day=7;
//switch (day) {
//case  day=0:
//console.log("monday");
//break;
//case day=1:
//console.log("tuesday");
//break;   
//case day=2:
//console.log("wednesday");    
//break;
//case day=3:
//console.log("thursday");
//break;
//case day=4:
//console.log("friday");
//break; 
//case day=5:
//console.log("saturday");
//break;
//case day=6:
//console.log("sunday");       
//default:
//console.log("something write to get wrong");
//}
    
//for loop
//let n=10;
//for(let n=0;n<=10;n++){
//console.log(n);
//}

//while loop
//let i= 1;
//while (i<=10) {
//console.log(i);
//i++;
//}

//do-while loop
//let number=0;
//do {
//i+=1;
  //} while (number>0&&number<5){
//number--;
//}
//console.log(number); 
  
//for each-loop
//const array1 = ['a', 'b', 'c'];
//array1.forEach(element => console.log(element));

//for in-loop
//const object={a:1,b:2,c:3};
//for (const property in object) {
//console.log(`${property}: ${object[property]}`);
//}

//for of-loop
//const array=['p','q','r'];
//for (const element of array) {
//console.log(element);
//}
 
  //for loop sum of natrual numbers
  //let x=0;
  //for (let i=1; i<=5; i++){
    //sum = sum+i;
    //return sum;
   // console.log("sum of 5 natural numbers"+sum);
  //}
 //functions starts here!
  
//addition
function printMessage(Message){
  console.log(Message);
}

function add(x,y){
 let addofNumbers =x+y;
return addofNumbers;
}

let result=add(5,3);
printMessage(result);

//substraction
function printMessage(Message){
console.log(Message);
}
function sub(x,y){
  return x-y;
}

let num=sub(5,3);
printMessage(num);

//multiplication
function printMessage(Message){
  console.log(Message);
}

function multi(x,y){
  return x*y;
}

let value=multi(5,4);
printMessage(value);
 
//divison
function printMessage(Message){
  console.log(Message);
}

function divison(x,y){
  return x/y;
}

let operator=divison(5,3);
printMessage(operator);

//modulos 
function printMessage(Message){
  console.log(Message);
}

function modulo(x,y){
  return x%y;
}

let Object =modulo(5,12);
printMessage(Object);

