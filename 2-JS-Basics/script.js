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


/*************************** 
 * Variable mutation and type coercion
*/


// Type Coercion 
// var name = 'John';
// var age = 28;

// console.log(name + ' ' + age);
// console.log(age + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(name + ' is ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

//  Variable mutation
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




/***************
 * Operator precedence
 */

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

// Multiple Operators
// var isFullAge = now - yearJohn >= fullAge; // true
// console.log(isFullAge);

// Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// Multiple Variables
// var x, y;
// x = y = (3 + 5) * 4 - 6 ; // 8 * 4 - 6 // 32 - 6  // 26
// console.log(x, y);

// More operators
// x *= 2;
// x += 10;
// console.log(x);
// x++;
// console.log(x);

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

// var massMark = 78; // kg
// var heightMark = 1.69; // meters
// var massJohn = 92;
// var heightJohn = 1.95;
// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
// var markHigherBMI = BMIMark > BMIJohn;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);


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



/*********************
 * Ternary Operator
 */

// var firstName = 'John';
// var age = 14;

// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.')

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);


/*****************************
* Truthy and Falsy values and equality operators
*/
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values 

// var height;

// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable is NOT defined')
// }

// // Equality operators
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

// var johnsScoreAvg = (89 + 160 + 103) / 3;
// var marksScoreAvg = (89 + 140 + 103) / 3;
// var marysScoreAvg = (97 + 134 + 105) / 3;

// console.log(johnsScoreAvg, marksScoreAvg, marysScoreAvg);

// if (johnsScoreAvg > marksScoreAvg && johnsScoreAvg > marysScoreAvg) {
//     console.log("John's average is higher ", johnsScoreAvg);
// } else if (johnsScoreAvg < marksScoreAvg && marysScoreAvg < marksScoreAvg ) {
//     console.log("Mark's average is higher ", marksScoreAvg);
// } else if (marysScoreAvg > johnsScoreAvg && marysScoreAvg > marksScoreAvg) {
//     console.log("Mary's average is higher ", marksScoreAvg);
// } else {
//     console.log("There is a draw", marksScoreAvg)
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
//     var age = 2018 - yearOfBirth;
//     return age;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);
// console.log(ageJohn, ageMike, ageMary);

// function yearUntilRetirement(name, year) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement >= 0) {
//         console.log(name + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(name + ' has already retired.');
//     }
// }

// yearUntilRetirement('John', 1990);
// yearUntilRetirement('Mike', 1970);
// yearUntilRetirement('Mary', 1948);


/////////////////////////////////////
// Lecture: Statements and Expressions

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
// var whatDoYouDO = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code'
//         case 'driver':
//             return firstName + ' teaches kids how to drive'
//         case 'designer':
//             return firstName + ' teaches kids how to design'
//         default:
//         return firstName + ' does something else'
//     }
// }

// console.log( whatDoYouDO('teacher', 'mark') );
// console.log( whatDoYouDO('designer', 'john') );
// console.log( whatDoYouDO('driver', 'peter') );
// console.log( whatDoYouDO('retired', 'mark') );

// // Statements
// if (true) {
//   console.log(23);
// }



/////////////////////////////////////
// Lecture: Arrays

// Intiatize array data
// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);

// // Mutate array data
// console.log(names[1]);
// names[1] = "Ben";
// names[names.length] = 'Mary';
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr');
// console.log(john);

// john.pop();
// john.pop();
// john.shift('Mr');
// console.log(john);

// alert(john.indexOf('Smith'));

// var isDesigner = john.indexOf('designer') === -1 ? "John is a Not designer" : "John is a designer";

// console.log(isDesigner, john.indexOf('designer'));

// if (john.indexOf('designer') === -1) {
// 	console.log('John is NOT a designer');
// } else {
//     console.log('John is a designer');
// }


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

// function tipCalculator(bill) {
//     var percentage;

//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill <= 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];

// console.log( tipCalculator(10) );

// var tips = [
//     tipCalculator(bills[0]),
//     tipCalculator(bills[1]),
//     tipCalculator(bills[2])
// ]

// var finalValues = [
//     bills[0] + tips[0],
//     bills[0] + tips[1],
//     bills[0] + tips[2]
// ]

// console.log( tips );
// console.log( finalValues );

// var bills = [124, 48, 268];
// var tips = [];
// var totals = [];

// function tipCalc(bills) {

//     // console.log(bills.length);

//     for (i = 0; bills.length > i; i++) {

//         if ( bills[i] < 50 ) {
//             tips[i] =  (bills[i]/100)*20;
//             totals[i] = bills[i] + tips[i];
//         } else if ( bills[i] >= 50 && bills[i] <= 200) {
//             tips[i] =  (bills[i]/100)*15;
//             totals[i] = bills[i] + tips[i];
//         } else {
//             tips[i] =  (bills[i]/100)*10;
//             totals[i] = bills[i] + tips[i];
//         }
//     }
// }

// tipCalc(bills);

// console.log('Bills are ', bills );
// console.log('Tips will be', tips );
// console.log('Totals will be', totals );


// Find Dupes & Remove

var data = [
	{
		name: 'Kyle',
		occupation: 'Fashion Designer'
	},
	{
		name: 'Liza',
		occupation: 'Web Developer'
	},
	{
		name: 'Emily',
		occupation: 'Web Designer'
	},
	{
		name: 'Melissa',
		occupation: 'Fashion Designer'
	},
	{
		name: 'Tom',
		occupation: 'Web Developer'
	}
];

var jobs = data.map(function (item) {
	return item.occupation;
});

console.log(jobs);

var jobsUnique = jobs.filter(function(item, index){
	return jobs.indexOf(item) >= index;
});

console.log(jobsUnique);


// var myArray = [ 100, 56, 300, 20, 44, 34, 56, 20];
// myArray.sort();
// for (i=0; myArray.length > i; i++) {
//     if(myArray[i] === myArray[i+1]) {
//         myArray.splice(i, 1);
//     }
// }


/////////////////////////////////////
// Lecture: Objects and Properies

// var john = {
//     name: 'John',
//     lastName: 'Smith',
//     yearOfBirth: '1990',
//     job: 'teacher',
//     isMarried: false,
//     family: ['Jane', 'Mark', 'Bob', 'Emily']
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

// function printFullAge(years) {

// 	var ages = [];
//     var fullAges = [];

// 	for (var i = 0; i < years.length; i++) {
// 	     ages[i] = 2017 - years[i];
// 	};

// 	for (var i = 0; i < ages.length; i++) {

// 		if (ages[i] >= 18 ) {
// 			console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and of full age.');
// 			 fullAges.push(true);
// 		} else {
// 			console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and NOT of full age.');
// 			 fullAges.push(false);
// 		}
// 	}

// 	console.log(' ');

// 	return fullAges;

// }

// var yearsBorn = [1965, 2008, 1992, 1945, 1909];
// var full_1 = printFullAge(yearsBorn);
// var full_2 = printFullAge([2012, 1915, 1999]);






/////////////////////////////////////
// Lecture: 





























































