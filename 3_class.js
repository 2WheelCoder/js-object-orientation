function Teacher(name, course) {
    this.name = name;
    this.course = course;
    this.teach = function(student, topic) {
        return this.name + ' taught ' + topic + ' to ' + student + '.';
    }
}


// var rich = new Teacher('Rich Bowen', 'UCD');
// rich.teach();
