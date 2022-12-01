//Arthimatic operators
let a=5;
let b=12;
let addition=a+b
let substartion=a-b
let mutiplication=a*b
let division=a/b
let modulos=a%b
console.log(addition,substartion,mutiplication,division,modulos)

//Assignment operator
 let x=7;
 let y=9;
 console.log(x+=y,x-=y,x*=y,x/=y,x%=y,x**=y)
 //logical operators
//logical  And operator
let age = 20;
if(age>13 && age<=19){
    console.log(`you are a "teenager".`)
} else if(age>=19 && age<27){
    console.log(`"you are an "adult"`)
}else{console.log("you are not a teenager or adult")}
// logical OR operator
let num=8;
let num1=10;
console.log(num>num1 || num<num1)
//logical not operator
let three=3;
let seven=7;
console.log(!(three>seven && three<seven))
//Ternary
let result = (8<5) ?"True":"False";
console.log(result)
// incriment and decriment
let N = 3;
console.log(N++)//3
console.log(++N)//5
console.log(N--)//5
console.log(++N)//5
console.log(--N)//4
console.log(N)//4
