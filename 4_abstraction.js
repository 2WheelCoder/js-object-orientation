function Teacher(name, course) {
    this.name = name;
    this.course = course;
    this.teach = function(student, topic) {
        return this.name + ' taught ' + topic + ' to ' + student + '.';
    };
    this.ideate = function(idea) {
        return this.name + ' came up with ' + idea + '.';
    };
}

function Administrator(name, title) {
    this.name = name;
    this.title = title;
    this.plan = function(event) {
        return this.name + ' planned ' + event + '.';
    };
    this.ideate = function(idea) {
        return this.name + ' came up with ' + idea + '.';
    };
}

function Employee(name) {
    this.name = name;
    this.ideate = function(idea) {
        return this.name + ' came up with ' + idea + '.';
    };
}

// var david = new Administrator('David Slayden', 'Founder');
// david.ideate('big data');

// var rich = new Employee('Rich Bowen');
// rich.ideate('useful, usable and compelling');
// david = new Employee('David Slayden');
// david.ideate('big data');
