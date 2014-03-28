function Employee(name) {
    this.name = name;
    this.ideate = function(idea) {
        return this.name + ' came up with ' + idea '.';
    };
}

function Teacher(name, course) {
    this.course = course;
    this.teach = function(topic, student) {
        return this.name + ' taught ' + topic + ' to ' + student + '.';
    };
}

Teacher.prototype = new Employee();

// var len = new Teacher('Len Beasley');
// len.teach('card sorts', 'Tara');
// len.ideate('high fidelity prototypes');
