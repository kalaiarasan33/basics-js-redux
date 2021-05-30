// ************** Array , Method and Object **************

// let framework = ["Angular","React","vue"]

// let databases = new Array("DB1","DB2","DB3")

// console.log(framework);
// console.log(databases[0]);
// console.log(databases);

// ************** Methods **************

// console.log(framework.length);
// console.log(framework.sort());
// console.log(framework.pop());
// console.log(framework);
// framework.push("nextjs")
// framework.shift()
// framework.unshift("chakra")
// console.log(framework)
// console.log(typeof framework)
// console.log(Array.isArray(framework))

// ************** Oject **************

let student = {
    ID: "1",
    Name: "Senpai",
    Gender: "1",
    Class: "32",
    Seat: "15",
    Club: "0",
    Address:{city: "chennai"},
    email: function(){return `${this.Name}@kmail.com`}

};

console.log(typeof student);
console.log(student.Address.city);
console.log(student.email());

// ************** ES6 Destructing **************

const {ID,Name} = student;
console.log(ID)

// Array of Object

let car = [
    {
        type:"Fiat",    
        model:"500", 
        color:"white"
    },
    {
        type:"Hyundai",    
        model:"accent", 
        color:"black"
    },
    {
        type:"bmw",    
        model:"x6", 
        color:"brown"
    }
];

console.log(car[0].color);
const carjson = JSON.stringify(car); // convert  JavaScript object into  json
console.log(carjson);
const carparse = JSON.parse(carjson); //  convert text into a JavaScript object:
console.log(carparse);

// ************** For Loop ***************

for (i=0;i<car.length;i++) {
    console.log(car[i].type)

}

for (let c of car ){
    console.log(c)
}

car.forEach((c)=>{
    console.log("Foreach")
    console.log(c)
    
})

const t = car.map((c)=>{

    return c.type;
    
})
console.log("map",t)

const carfil = car.filter((c)=>{
    return c.type == 'fiat';
});
console.log("filter")
console.log(carfil)




// ************** While Loop ***************

let a =0;
while (a < car.length){
    console.log(car[a].color)
    a++
}

// ************** Condition *****************

let e = 5;

if (e==10){
    console.log(e)
}else if (e==5){
    console.log(e)
}else{
    console.log("No val")
}