function Employee(name) {
    this.name = name;
    this.ideate = function(idea) {
        return this.name + ' came up with ' + idea '.';
    };
}

function Teacher(name, course) {
    this.course = course;
    this.ideate = function(idea) {
        return this.name ' came up with ' + idea + ' but could not repeat it when asked.';
    }
}

Teacher.prototype = new Employee();

// var rich = new Teacher('Rich Bowen');
// rich.ideate('a brilliant explanation');

// show prototype chain
