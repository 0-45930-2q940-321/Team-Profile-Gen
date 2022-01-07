const Manager = require('../lib/Manager');

describe('Collect the Managers office number and create a Manager role', () => {
    it('should create a Manager', () => {
        const createdManager = new Manager();
    
        expect(createdManager.setJobRole()).toMatch('Manager');
    });
    
    it('should get the office number', () => {
        const createdManager = new Manager('Testing', '4', 'email4@email.com', '1234');
    
        expect(createdManager.officeNum).toMatch('1234');
    });
});