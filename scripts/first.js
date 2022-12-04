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
let N = 5;
console.log(N++)//5
console.log(++N)//7
console.log(N--)//7
console.log(++N)//7
console.log(--N)//6
console.log(N)//6
//switch case
//let x=7;
    //switch (days) {
        //case  day0:
          //console.log("monday");
        //break;
        //case day1:
            //console.log("tuesday");
        //break;   
        //case day2:
            //console.log("wednesday");    
        //break;
        //case day3:
            //console.log("thursday");
           // break;
            //case day4:
                //console.log("friday");
                //break;
            //case day6:
                //console.log("saturday");
           // break;
           // case day7:
                //console.log("sunday");       
            //default:
               // console.log("something write to get wrong");
   // }
   //for loop
   let n=10;
   for(let n=0;n<=10;n++){
     console.log(n);
   }

//while loop
let i= 0;
while (i<=10) {
  i++;
}
console.log(i);

//do-while loop
let number=0;
do {
  i+=1;
    
} while (number>0&&number<5){
  number--;
}
  console.log(number); 
  
//for each-loop
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

//for in-loop
const object={a:1,b:2,c:3};
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
  }

  //for of-loop
  const array=['p','q','r'];
  for (const element of array) {
    console.log(element);
  }
