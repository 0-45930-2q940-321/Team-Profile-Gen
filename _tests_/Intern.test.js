const Intern = require('../lib/Intern');

describe('Collect the Interns school name and create an Intern role', () => {
    it('should create an Intern', () => {
        const createdIntern = new Intern();
    
        expect(createdIntern.setJobRole()).toMatch('Intern');
    });
    
    it('should get a school name', () => {
        const createdIntern = new Intern('Testing', '3', 'email3@email.com', 'Somewhere School');
    
        expect(createdIntern.school).toMatch('Somewhere School');
    });
});