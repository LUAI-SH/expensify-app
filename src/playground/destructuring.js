console.log('----------- Destructring --------------');

/**
 * Object destructuring
 */

const person = {
    name: 'Luai',
    age: 28,
    location: {
        city: 'Melaka',
        temp: 40
    } 
}


const { name = 'Anonymos', age } = person
console.log(`${name} is ${age} years old.`);

const { city, temp: temperature} = person.location
console.log(`I live in ${city} and the temperature is ${temperature}`);

/**
 * Array destructuring
 */

 const address = ['BBU', 'Melaka', 'Malaysia'];

 const [ , _city, _countery] = address;

 console.log(`You are in ${_city}, ${_countery}`);