const dhiren = {
    name : "Dhiren",
    age : 26,
    address : {
        city : "Bangalore",
        temprature : 30
    }
}

const {name , age} = dhiren;

const {city = "Mumbai default" , temprature:temp} = dhiren.address;

console.log(`I am ${name} age is ${age} stay in ${city} which has ${temp} degree celcius.`);

const pooja = {
    pname : "Pooja",
    page : 26,
    paddress : {
        ptemprature : 30
    }
}

const {pname , page} = pooja;

const {pcity = "Mumbai default" , ptemprature:temprature} = pooja.paddress;

console.log(`I am ${pname} age is ${page} stay in ${pcity} which has ${temprature} degree celcius.`);