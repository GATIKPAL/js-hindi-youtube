const name = "gatik"
const repocount = 50
//console.log(name + repocount + " Value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('hitesh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('t'));

//const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());//extra spaces ko remove kar deta h starting and ending ke

const url = "https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-'))
