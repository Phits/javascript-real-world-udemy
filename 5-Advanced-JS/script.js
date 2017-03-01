// Function constructor

var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
}

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = calculateAge = function() {
		console.log(2017 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

// Instantiation
var john = new Person('John', 1990, 'Teacher');
var Jane = new Person('Jane', 1969, 'Designer');
var Mark = new Person('Mark', 1948, 'Retired');

john.calculateAge();
Jane.calculateAge();
Mark.calculateAge();

console.log(john.lastName);
console.log(Jane.lastName);
console.log(Mark.lastName);








































