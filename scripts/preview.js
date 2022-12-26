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
 

//promises
function createDeveloper(dev){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(dev &&Object.keys(dev).length===0&&Object.getPrototypeOf(dev)===Object.prototype){
                reject("Empty Dev Recieved.Please Fix");
            }else{
                resolve(developers.push(dev));
            }
        },3000);
    })
}

createDeveloper({
    name:"Ramesh",
    favfruit:"orange",
    company:"Amazon"
}).then(getDevelopers).catch(err => console.err(err)).finally("We're done");

//Async Await
async function initProgram(){
    await createDeveloper({
    name:"Ramesh",
    favfruit:"Orange",
    company:"Amazon"
    });
    getDevelopers();
}    
initProgram();