const accountId = 12345
let accountmail = "Abc@gogole.com"
var accountpassword = "12345"
accountcity  = "Jaipur"
let accountState

// const for constant and let & var for variable
//  accountId = 51
console.log(accountId);
accountcity = "bengaluru"

console.table([accountId,accountmail, accountpassword,accountcity, accountState])

/*
Avoid using var because of block scope and funciton scope 
Instead use let for declaring variables 
*/