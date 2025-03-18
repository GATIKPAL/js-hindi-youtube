//console.log("h");
//console.log("o");
//console.log("o");
//console.log("d");

function sayMyName() {
    console.log("h");
    console.log("o");
    console.log("o");
    console.log("d");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

   // console.log(number1 + number2);
    
//}console log return nhi karna woh sirf console ko print karta h 


function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
    //or return number1 + number2
    //console.log("GATIK"); yeh line print nahi hui kyuki return ke baad function terminate ho jata h
    
}
const result = addTwoNumbers(3 , 5)

// console.log("Result:", result);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())


function calculateCartPrice(val1,val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user ={
    username:"hitesh",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)