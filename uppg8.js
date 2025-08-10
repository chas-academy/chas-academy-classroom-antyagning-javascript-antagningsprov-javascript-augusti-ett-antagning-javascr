

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
// anropa funktionen och skicka med arrayen som argument

const person = [
  
    {name:"Patricia",  age: 105},
    {name:"Sasha,",    age: 34 },
    {name:"sasquatch,", age: 14 },
    {name:"hawkeisha,", age: 64 },
    {name:"Quanisha,", age: 94 }

];


function kundvilk (persarr){
    for (let person of persarr)
        if (person.age > 30 ){
            console.log(person.name);
        }

}

kundvilk(person);

}

module.exports = { uppg8 };