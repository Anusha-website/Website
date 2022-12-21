const developers=[
{
    name:"john",
    favfruit:"Mango",
    company:"Google"
},
{
    name:"jessica",
    favfruit:"pinneapple",
    company:"Microsoft"
}
];

function getDevelopers(){
    setTimeout(() => {
       developers.forEach((dev) =>{
        console.log(dev.company);
       })
    },2000);
}

function createDeveloper(dev, cb){
    setTimeout(() => {
      developers.push(dev);
      cb();  
    },3000);
}

createDeveloper({
    name:"Ramesh",
    favfruit:"orange",
    company:"Amazon"
},getDevelopers);
    

