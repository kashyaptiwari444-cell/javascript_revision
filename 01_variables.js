const accountId = 123321
let accountEmail = "kashyap@gmail.com"
var accountPassword = "12345"
accountCity = "prayagraj"
let accountState;  // undefined

// accountId = 21 // const cannot be change.

accountEmail = "tiwari@gmail.com"
accountPassword = "99"
accountCity = "allahabad"

/*
Prefer not to use var.
becouse of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])