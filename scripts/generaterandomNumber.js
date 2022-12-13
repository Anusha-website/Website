function generaterandomNumber() {
    let randomNumber = Math.random() * 1000000;
    document.querySelector("address").innerHTML = (Math.floor(randomNumber));
}
