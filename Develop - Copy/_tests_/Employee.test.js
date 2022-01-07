const Employee = require('../lib/employee');
//Describe lets you run tests relative to other tests
describe('Create an Employee with relative info', () => {
    it('should make an Empolyee role', () => {
        const createdEmployee = new Employee();
    
        expect(createdEmployee.setJobRole()).toMatch('Employee');
    });

    it('should make a name for the Employee', () => {
        const createdEmployee = new Employee('Testing', '1', 'email@email');
    
        expect(createdEmployee.name).toMatch('Testing');
    });
    
    it('should make an id for the Employee', () => {
        const createdEmployee = new Employee('Testing', '1', 'email@email.com');
    
        expect(createdEmployee.id).toMatch('1');
    });
    
    it('should make an email for the Employee', () => {
        const createdEmployee = new Employee('Testing', '1', 'email@email.com');
    
        expect(createdEmployee.email).toMatch('email@email.com');
    });
});