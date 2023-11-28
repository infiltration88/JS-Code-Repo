let score = 77

let scorestring ='77'

let scoremix = '77abc'

//const{score} = req.body

//console.log(typeof score);
//console.log(typeof (score));
// output for above will be number

// console.log(typeof scorestring);
// console.log(typeof (scorestring));
//output for above will be string since quote

// let ValueInNumber = Number(scorestring)  //converting string to number
// console.log(typeof ValueInNumber);

//console.log(typeof scoremix);
//console.log(typeof (scoremix));

let ValueInNumberNew = Number(scoremix)  //converting string to number
//console.log(typeof ValueInNumberNew);
//console.log(ValueInNumberNew);  //what is inside ValueInNumberNew , NaN = Not a number

// This is one of the drawback in JS that even if there is a string e.g. 77abc it will show datatype as number when used 
// The Number functionality


// When you put null as the value for scoremix the output is Object Object Number 0
// When you put undefined as the value for scoremix the output is undefined undefined Number NaN
// When you put some Boolean value e.g. true as the value for scoremix the output is boolean boolean Number 1 if it was false it will be 0
// When you put some string value that cant be a number e.g. "Rohan" in scoremix the output will be String String Number NaN


// If we wanted to convert to Boolean if the user is logged in or not

let LoggedIn = true

let BooleanLoggedIn = Boolean(LoggedIn)
//console.log(BooleanLoggedIn);

//1 => true
// 0 =>  false
// "Rohan" => True
//"" => False

// Trying the same on string

let someNumber = 33
let StringsomeNumber = String(someNumber);
console.log(typeof someNumber);
console.log(typeof StringsomeNumber);
console.log(StringsomeNumber);