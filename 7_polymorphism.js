function Employee(name) {
    this.name = name;
    this.ideate = function(idea) {
        return this.name + ' came up with ' + idea + '.';
    };
}

function Teacher(name) {
    this.name = name;
}

Teacher.prototype = new Employee();

// Teacher.prototype.ideate = function(idea) {
//     return this.name + ' came up with ' + idea + ' but could not repeat it when asked.';
// }

// var tiffany = new Employee('Tiffany');
// tiffany.ideate('Reveal');
// var rich = new Teacher('Rich Bowen', 'UCD');
// rich.ideate('a brilliant explanation');

// show prototype chain
