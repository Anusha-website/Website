function Displaydatetime(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    let hrs = today.getHours();
    let min = today.getMinutes();
// let sec = today.getSeconds();>
    // let session =document.getElementById('session');
    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // let day =weekday[today.getDay()];
    // if(hrs>=12){
    //     session.innerHTML = "PM"
    // }
    // else{
    //     session.innerHTML = "AM"
    // }

    // if(hrs>12){
    //     hrs = hrs-12;
    // }

    document.getElementById('hrs').innerHTML = hrs;
    document.getElementById('Minits').innerHTML = min;
    // document.getElementById('seconds').innerHTML = sec;
    document.getElementById('day').innerHTML = dd;
    document.getElementById('month').innerHTML = mm;
    document.getElementById('year').innerHTML = yyyy;
    document.getElementById('week').innerHTML = day;


    
}
setInterval(Displaydatetime);