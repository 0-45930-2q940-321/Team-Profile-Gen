const Employee = require("./Employee");
//Extend lets you literally extend off of the original class, being Employee. Letting you add onto or use objects/functions set into the first class.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    
    setJobRole() {
        return 'Engineer';
    };

    inputGithub() {
        return this.github;
    };
};

module.exports = Engineer;