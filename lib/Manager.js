const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    };
    
    setJobRole() {
        return 'Manager';
    };

    inputOfficeNum() {
        return this.officeNum;
    };
};

module.exports = Manager;