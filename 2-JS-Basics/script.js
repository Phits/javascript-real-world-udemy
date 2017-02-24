// Lecture Variables 

/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/






// Lecture: variables 2

// var name = 'John';
// var age = 28;

// console.log(name + age);
// console.log(age + age);

// var job, isMarried;

// console.log(job);

// job = 'teacher';
// isMarried = false;

// console.log(name + ' is ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

// age = 'thirty six';
// job = 'driver';

// console.log(name + ' is ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

// var lastName = prompt("What is the last name?");

// console.log(lastName);

// alert(name + ' is ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');






// Lecture: operators
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// var now = 2017;
// var birthYear = now -26;

// birthYear = now -26 * 2;
// 2016 - 52
//1964

// console.log(birthYear);

// var ageJOhn = 36;
// var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26
// ageJohn = 26

// ageJohn++
// ageMark *= 2;

// console.log(ageJohn);
// console.log(ageMark);


////////////////////////////////////////
// Lecture: if/else statements

// var name = 'John';
// var age = 26;
// var isMarried = 'no';

// if (isMarried === 'yes') {
//     console.log(name + 'is married');
// } else {
// 	console.log(name + 'will hopefully marry soon :-)');
// }

// isMarried = true;

// if (isMarried) {
//     console.log(name + 'is married');
// } else {
// 	console.log(name + 'will hopefully marry soon :-)');
// }

// if (isMarried) {
//     console.log(name + 'is married');
// }

// Type Conversion
// if(23 == "23") {
//      console.log('Something to print');
// }

// No Type Conversion
// if(23 === "23") {
//      console.log('Something to print');
// }







////////////////////////////////////////
// Lecture: boolean logic and switch

// var age = 20;

// if(age < 20) {
//     console.log('John is a tennager.');
// } else if (age >= 20 && age < 30) {
//     console.log('John is a young man..');
// } else {
// 	console.log('John is a man.');
// }

// var job = 'teacher';

// job = prompt('What does John do?')

// switch (job) {
// 	case 'teacher':
// 		console.log('John teachers kids.');
// 		break;
// 	 case 'driver':
// 		console.log('John drives a cab.');
// 		break;
// 	case 'cop':
// 		console.log('John helps fight crime.');
// 		break;
// 	default:
// 	console.log('John does someting else.')
// }  









/////////////////////////////////////
// Coding Challenge 1

var johnsAge = 88;
var dannysAge = 26
var billsAge = 49;


var johnsHeight = 155;
var dannysHeight = 168;
var billsHeight = 173;

var johnsScore = johnsHeight + 5 * johnsAge;
var dannysScore = dannysHeight + 5 * dannysAge;
var billsScore = billsHeight + 5 * billsAge;


if (johnsScore > dannysScore && johnsScore > billsScore) {
   console.log('John wins becasue his score of ' + johnsScore + ' is higher than Danny\'s score of ' + dannysScore + ' and Bill\s score of ' + billsScore);
} else if (billsScore > dannysScore && billsScore > johnsScore) {
    console.log('Bill wins becasue his score of ' + billsScore + ' is higher than Danny\'s score of ' + dannysScore + ' John\s score of ' + johnsScore);
}
   else {
	 console.log('Danny wins becasue his score of ' + dannysScore + ' is higher than John\'s score of ' + johnsScore+ ' and Bill\s score of ' + billsScore);
} 


































































