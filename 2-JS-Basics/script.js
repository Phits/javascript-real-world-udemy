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

// var johnsAge = 56;
// var dannysAge = 18;
// var billsAge = 49;


// var johnsHeight = 155;
// var dannysHeight = 168;
// var billsHeight = 173;

// var johnsScore = johnsHeight + 5 * johnsAge;
// var dannysScore = dannysHeight + 5 * dannysAge;
// var billsScore = billsHeight + 5 * billsAge;


// if (johnsScore > dannysScore && johnsScore > billsScore) {
//    console.log('John wins becasue his score of ' + johnsScore + ' is higher than Danny\'s score of ' + dannysScore + ' and Bill\s score of ' + billsScore);
// } else if (billsScore > dannysScore && billsScore > johnsScore) {
//     console.log('Bill wins becasue his score of ' + billsScore + ' is higher than Danny\'s score of ' + dannysScore + ' John\s score of ' + johnsScore);
// } else if (dannysScore > billsScore && dannysScore > johnsScore) {
// 	 console.log('Danny wins becasue his score of ' + dannysScore + ' is higher than John\'s score of ' + johnsScore+ ' and Bill\s score of ' + billsScore);
// } else {
// 	console.log('It\'s a draw');
// }







/////////////////////////////////////
// Lecture: Funcitons

// function calculateAge(yearOfBirth) {
//     var age = 2017 - yearOfBirth;
//     return age;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);
// console.log(ageMike);

// function yearUntilRetirement(name, year) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement >= 0) {
//          console.log(name + ' retires in ' + retirement + ' years.');
//     } else {
//     	 console.log(name + ' has already retired.');
//     }

   
// }

// yearUntilRetirement('John', 1990);
// yearUntilRetirement('Mike', 1990);
// yearUntilRetirement('Mary', 1948);






/////////////////////////////////////
// Lecture: Statements and Expressions

// Statements
// function someFun(par) {
   
// }

// if (x = 5) {
	
// }

// Expression
// var someFun = function(par) {
	
// }

// 3 + 4;

// var x = 3;








/////////////////////////////////////
// Lecture: Arrays

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[1]);
// names[1] = "Ben";
// console.log(names);

// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue');
// john.unshift('Mr');
// john.pop();
// john.shift('Mr');
// console.log(john);

// alert(john.indexOf('Smith'));

// if (john.indexOf('designer') === -1) {
// 	console.log('John is not a teacher');
// }








/////////////////////////////////////
// Lecture: Objects and Properies

// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: '1990',
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.lastName);
// console.log(john['lastName']);

// var xyz = 'job';
// console.log(john[xyz]);

// john.lastName = 'Miller';
// john['job'] = 'brogrammer';

// console.log(john);

// var jane = new Object;

// jane.name = 'jane';
// jane.lastName = 'Smith';
// jane.yearOfBirth = '1969';
// jane.job = 'Is retired.';
// jane.isMarried = true;

// console.log(jane);









/////////////////////////////////////
// Lecture: Objects and Methods

// v1.0
// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: '1990',
//     job: 'teacher',
//     isMarried: false,
//     family: ['Jane', 'Mark', 'Bob'],
//     calculateAge: function() {
//     	return 2017 - this.yearOfBirth;
//     }
// };

// console.log( john.calculateAge() );

// var age = john.calculateAge();
// john.age = age;

// console.log(john);

// v2.0
// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: '1990',
//     job: 'teacher',
//     isMarried: false,
//     family: ['Jane', 'Mark', 'Bob'],
//     calculateAge: function() {
//     	this.age = 2017 - this.yearOfBirth;
//     }
// };

// john.calculateAge();

// console.log(john);

// var mike = {
//     yearOfBirth: '1950',
//     calculateAge: function() {
//     	this.age = 2017 - this.yearOfBirth;
//     }
// };

// mike.calculateAge();

// console.log(mike);









/////////////////////////////////////
// Coding Challenge 2

// var yearsBorn = [1965, 2008, 1992, 1945, 1909];
// var ages = [];

// for (var i = 0; i < yearsBorn.length; i++) {
// 	 //console.log( yearsBorn[i]);	
//      ages[i] = 2017 - yearsBorn[i];
//      // console.log( ages[i] );
// };

// for (i = 0; i < ages.length; i++) {

// 	if (ages[i] >= 18 ) {
// 		console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and of full age.');
// 	} else {
// 		console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and NOT of full age.');
// 	}

// };

function printFullAge(years) {

	var ages = [];
    var fullAges = [];

	for (var i = 0; i < years.length; i++) {
	     ages[i] = 2017 - years[i];
	};

	for (var i = 0; i < ages.length; i++) {

		if (ages[i] >= 18 ) {
			console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and of full age.');
			 fullAges.push(true);
		} else {
			console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and NOT of full age.');
			 fullAges.push(false);
		}
	}

	console.log(' ');

	return fullAges;

}

var yearsBorn = [1965, 2008, 1992, 1945, 1909];
var full_1 = printFullAge(yearsBorn);
var full_2 = printFullAge([2012, 1915, 1999]);




























































