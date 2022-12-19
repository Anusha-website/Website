let btn1 = document.querySelector('#btnp1');
let btn2 = document.querySelector('#btnp2');
let p1value = document.querySelector('#p1value');
let p2value = document.querySelector('#p2value');

function generateRandom() {
    let randomNumber = Math.random()*100;
    let result = (Math.floor(randomNumber)); 
    return result;
}

// btn1.addEventListener('click', () =>{
//     p1value.innerText = generateRandom();

// });

// btn2.addEventListener('click', () =>{
//     p2value.innerText = generateRandom();
// });


function randomNum1() {
    document.querySelector("#randomNum2").innerHTML= Math.floor(Math.random()*100);

}
function randomNum2() {
    document.querySelector("#randomNum1").innerHTML= Math.floor(Math.random()*100);
}