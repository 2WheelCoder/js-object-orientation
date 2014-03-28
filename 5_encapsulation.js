function Employee(name, age) {
    var age = age;

    this.name = name;
    this.peekAtID = function() {
        return age;
    };
}

// var david = new Employee('David Slayden', 235);
// david.name;
// david.age; // undefined!
// david.peekAtID();
