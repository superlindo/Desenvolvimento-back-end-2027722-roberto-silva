var myLogModule = require('./Log');
myLogModule.info('Node.js started');

var person = require('./Person.js');
var person1 = new person('James', 'Bond');
var person2 = new person('Lebron', 'James');
console.log(person1.fullName());
console.log(person2.fullName());