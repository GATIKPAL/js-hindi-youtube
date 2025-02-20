const accountId = 144553
let accountEmail = "gatik@gmail.com"
var accountPassword = "123432"
accountCity = "jaipur"


// accountId = 2334 // NOT ALLOWED
accountEmail = "happy@gmail.com"
accountPassword = "21212121"
accountCity = "Bengluru"


/*
Prefer not to use var 
beacause of issue in block scope and functional scope
*/


console.log("accountId");

console.table([accountId, accountEmail, accountPassword, accountCity])


let accountState; // not necessary to put semicolon
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])