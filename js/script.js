// Assignment01

// // step 1
// let someMonth
// function theMonth()
// let currentMonth
// let summerMonth
// let myLibraryFunction

// // step 2
// numeric_literal_expression = 6.283185307179586;
// string_literal_expression  = "Hello my baby, hello my honey, hello my ragtime, summertime gal";
// boolean_literal_expression = b = true;
// null_literal_expression    = null;

// step 3
//ex. 1
const x = 1 + 2 * 3
//ex. 2
let z
const y = (z = f())
console.log(y)

// // step 4
// fName, lName, address, city, state, zipCode, yourAge, referralService, mayWeContactYou

// stringFirstName, stringLastName, stringAddress, stringCity, numberZipCode, numberYourAge, stringReferralService, booleanMayWeContactYou

// // step 5
//  var boolean mayWeContactYou  = true
//           let number zipCode  = 90210
// const string stringFirstName  = "Layla"

// // step 6
// let z = 2;
// let p = '2';
// console.log( z + p); // result int + str coerces to a string ("22")

// // step 7
// let first = true;
// first += ' yes';
// console.log(first);
// // step 7b
// let second = 0;
// second += false;
// console.log(second);

// // step 8
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)

// // step 9
// function getVowels(str) {
//   const m = str.match(/[aeiou]/gi);
//   if (m === null) {
//     return 0;
//   }
//   return m.length;
// }

// console.log(getVowels('sky') + ": because m was assigned a 'null' value, zero is returned ");

// function test(t) {
//   if (t === undefined) {
//     return 'Undefined value!';
//   }
//   return t;
// }
// let notDefined;
// console.log(test(notDefined));

// // step 10
// console.log(typeof('')+", "+ typeof(1)+", "+ typeof(true)+", "+ typeof({})+", "+ typeof(undefined));

// // step 11
// alert("Hello " + "Zak Ruvalcaba" + ", welcome to the JavaScript class!");

// // step 12
// let myName = "Chris Getz";
// alert("Hello " + myName + ", welcome to the JavaScript class!");

// // step 13
// let newName = "Chris Getz";
// let course = "JavaScript";
// let greet = "Hello ";
// let welcome = ", welcome to ";
// let clazz = " class!";
// alert( greet + newName + welcome + course + clazz );

// // step 14
// let newName = "Zak Ruvalcaba";
// let course = "JavaScript";
// let greet = "Hello ";
// let welcome = "Welcome to ";
// let clazz = " class!";
// alert( greet + newName + ". \n" + welcome + course + clazz );

// // step 15
// let promptName = prompt("Enter your name, please.");
// let course = "JavaScript";
// let greet = "Hello ";
// let welcome = "Welcome to ";
// let clazz = " class!";
// alert( greet + promptName + ". \n" + welcome + course + clazz );

// // step16
// let promptName = prompt("Enter your name, please.");
// let course = prompt( "Class to enroll in: ");
// let greet = "Hello ";
// let welcome = "Welcome to ";
// let clazz = " class!";
// alert( greet + promptName + ". \n" + welcome + course + clazz );

// // step17
// let x = 10;
// let y = 20;
// console.log("result: " + ( x + y ));

// // step18 Declare a variable called x and assign it a value of 20.
// let n = 20;
// n += 20;
// console.log(n);

// // step19
// let m = 20;
// m *= 5
// console.log(m);

// // step20
// let mod = 20%3;
// console.log(mod);

// // step21
// let one =1;
// let two =2;
// console.log(one == 1 && two == 2);

// //step22
// const a = 3;
// const b = -2;
// console.log(a > 0 && b > 0);

// let age = prompt("Enter your age in years: ")
// const minAnnualIncome = prompt("Enter projected annual income: ")
// const retirementAge = 65;
// const fn2 = () => {
//   if (age === retirementAge || minAnnualIncome >= 50000) {
//       console.log("Enjoy your golden years")
//   } else{
//     console.log("You must toil for some time to come!")
//   }
// }
// fn2();
