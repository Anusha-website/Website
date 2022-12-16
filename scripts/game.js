let btn1 = document.querySelector('#btnp1');
let btn2 = document.querySelector('#btnp2');
let p1value = document.querySelector('#p1value');
let p2value = document.querySelector('#p2value');

function generateRandom() {
    let randomNumber = Math.random()*100;
    let result = (Math.floor(randomNumber)); 
    return result;
}

btn1.addEventListener('click', () =>{
    p1value.innerText = generateRandom();

});

btn2.addEventListener('click', () =>{
    p2value.innerText = generateRandom();
});


// function ranDome1() {
//     document.querySelector("#p1value").innerHTML= Math.floor(Math.random()*100+1);

// }
// function ranDome2() {
//     document.querySelector("#p2value").innerHTML= Math.floor(Math.random()*100+1);
// }