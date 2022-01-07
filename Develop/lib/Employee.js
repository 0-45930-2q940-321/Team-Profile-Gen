//The blueprint for all objects/functions for classes that extend of this class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    setJobRole() {
        return 'Employee';
    };

    inputName() {
        return this.name;
    };

    inputId() {
        return this.id;
    };

    inputEmail() {
        return this.email;
    };
};

module.exports = Employee;