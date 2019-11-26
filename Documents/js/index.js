//this below is a command to log
//console.log("hello again from said");

/*
here everything 
is a comment
console.log("hi");
*/
//console.log("said");
//console.log("sushi".toUpperCase());
//let myfirstvariable = "hello";
//console.log(myfirstvariable);
//let mysecondvariable = "world";
//console.log(mysecondvariable);

//console.log(myfirstvariable + " " + mysecondvariable);
//console.log(1);
//console.log(0);
//console.log(0, 13);

//let sum = 1 + 2;
//let difference = 1 - 2;
//let product = 1 * 2;
//let quotient = 1 / 2;
//let modulo = 1 % 2;
//console.log(sum);
//console.log(difference);
//console.log(product);
//console.log(quotient);
//console.log(modulo);

//let currentyear = 2019;
//let mybirthdayyear = 1994;
//let myage = currentyear - mybirthdayyear;
//console.log(myage);

//let a = 1;
//let b = 2;
//console.log(a, b);

//let c = a;
//a = b;
//b = c;
//console.log(a, b);
//const ineverchange = 42;

//const username = prompt("what is your name?");
//const year = prompt("in wich year are you ?");
//const birthday = prompt("what is your birthday");
//console.log(username);
//console.log(year);
//console.log(birthday);
//let difference = year - birthday;
//console.log("hello" + " " + username + " " + "you are " + (year - birthday));

//const number1 = prompt("first number");
//const number2 = prompt("second number");
//console.log(parseInt(number1) + parseInt(number2));
//function sum(firstnumber, secondnumber) {
//return firstnumber + secondnumber;}
//console.log(sum(1, 2));
//let currentYear = 2019;
//let birthYear = 1989;
//console.log(currentYear - birthYear);

//let students = 10;
//let instructors = 3;
//let instructorsPerStudendt = Math.round(students / instructor);
//console.log(instructorsPerStudent);
//alert("i am javascript");
//let admin = "johan";
//let name = "johan";
//alert(admin);
//let ourplanetname = "earth";
//let currentusername = "johan";
//console.log(ourplanetname);
//console.log(currentusername);
// let str = "Hello";
// let str2 = "Single quotes are ok too";
// let phrase = `can embed ${str}`;
// let isGreater = 0 > 1;
// alert(isGreater);

// function asknumberandsum() {
// const number1 = askfornumber("appels");
// const number2 = askfornumber("oranges");
// console.log(number1 + number2);
//}
// function sum(number1, number2) {
// return number1 + number2;
// }
// function askfornumber(itemname) {
// return parseFloat(prompt("enter the number of " + itemname));
// }

// asknumberandsum();
// asknumberandsum();
// function isolderthan18(age) {
// return age >= 18;
// }
// const age = parseInt(prompt("what is your age"));
// const isolderthan18 = age >= 18;
// console.log("hello dear user");
// if (isolderthan18) {
// console.log("welcome to migracode clases");
// }
// console.log("bye");
// function askfornumber() {
// return prompt("write a password");
// }
// const password1 = askfornumber();
// const password2 = askfornumber();
// const hi = password1 === password2;
// if (hi) {
// console.log("the tow password match");
// } else {
// console.log("dos not match");
// }
// const number1 = prompt("first number");
// const number2 = prompt("second number");

// if (number1 > 5 || number2 > 5) {
// console.log("you have a big number");
// } else {
// console.log("you have a small number");
// }

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function headOrTails() {
//   const number = randomNumber(0, 1);
//   if (number === 0) {
//     return "head";
//   } else {
//     return "tail";
//   }
// }
// const headOrTail = prompt("Head or Tail?").toLowerCase();
// const result = headOrTails();
// console.log(`Random was ${result}`);
// if (headOrTail === result) {
//   console.log("You won!");
// } else {
//   console.log("LOSER");
// }
// let year = prompt(
//   "In which year was ECMAScript-2015 specification published?",
//   ""
// );

// if (year == 2015) alert("You are right!");
// if (year == 2015) {
//   alert("That's correct!");
//   alert("You're so smart!");
// }
// let age = prompt("age?", 18);

// let message =
//   age < 3
//     ? "Hi, baby!"
//     : age < 18
//     ? "Hello!"
//     : age < 100
//     ? "Greetings!"
//     : "What an unusual age!";

// alert(message);

// let nameOfJava = prompt("What's the “official” name of JavaScript?");
// if (nameOfJava === "ECMAScript") {
//   console.log("Right!");
// } else {
//   console.log("You don't know? “ECMAScript”!");
// }

// let number = prompt("write a number");
// let message = number > 0 ? 1 : number < 0 ? -1 : 0;

// alert(message);

// let a = prompt("give me a number");
// let b = prompt("give me a number");

// let message = a + b < 4 ? "d" : 4 < a + b ? "u" : "hello";
// alert(message);

// let login = prompt("Who are you", "");
// let message =
//   login === "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : "";
// alert(message);

// let hour = 12;
// if (hour < 10 || hour > 18) {
//   alert("The office is closed.");
// } else {
//   alert("office is open");
// }

// let hour = prompt("give me a number");

// let message =
//   hour === hour < 10 || hour > 18 || "isWeekend"
//     ? "The office is closed"
//     : "office is open";

// alert(message);

// let age = prompt("write a number");
// let message = !(age >= 14 && age <= 90)
//   ? "you are welcome"
//   : "you can not pass";
// alert(message);

let userName = prompt("Who's there?", "");

if (userName == "Admin") {
  let pass = prompt("Password?", "");

  if (pass == "TheMaster") {
    alert("Welcome!");
  } else if (pass == "" || pass == null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName == "" || userName == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
