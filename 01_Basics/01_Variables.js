const accountID = 12345
let accountEmail = ('riti@googgle.com')
var accountPass = "143"
accountCity = "Mumbai"
let accountState; 
// if you do not declare a variable JS will keep the value as undefined. Check the table

// accountID = 455 // Not Allowed

accountEmail="abc@google.com"
accountPass = "555"
accountCity = "Pune"

// console.log(accountID);

console.log(accountEmail);
console.log(accountPass);
console.log(accountCity);

/*
Prefer not to use var beacuse of issue with block scope and functional scope
*/

console.table([accountEmail,accountPass, accountCity,accountID,accountState])