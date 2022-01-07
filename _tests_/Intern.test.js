const Intern = require('../lib/Intern');

describe('Collect the Interns school name and create an Intern role', () => {
    it('should create an Intern', () => {
        const createedIntern = new Intern();
    
        expect(createedIntern.setJobRole()).toMatch('Intern');
    });
    
    it('should get a school name', () => {
        const createedIntern = new Intern('Testing', '3', 'email3@email.com', 'Somewhere School');
    
        expect(createedIntern.school).toMatch('Somewhere School');
    });
});