// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// bydefault vo ==, < , > ..etc me jb hai to data type se mtlb nhi hota only value match krana hota hai
// console.log("2" > 1);  // true
// console.log("02" > 1); // true

//is trh ke jo conversion hai vo kbhi bhi confuse kr skta hai so phle check kre .
// aur aise code ko jyadatr avoid krte hai  
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0);  // false
console.log(undefined < 0); // false
console.log(undefined > 0); // false

// == , double equal - kevl value ko check krta hai 
// === , strict check - value and datatype dono check krta hai 