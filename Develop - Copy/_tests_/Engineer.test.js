const Engineer = require('../lib/Engineer');

describe('Collect Engineers Github user and create Engineer role', () => {
    it('should create a Engineer', () => {
        const createdEngineer = new Engineer();
    
        expect(createdEngineer.setJobRole()).toMatch('Engineer');
    })
    
    it('should create a Github link for the Engineer', () => {
        const createdEngineer = new Engineer('Testing', '2', 'email2@email.com', 'github User');
    
        expect(createdEngineer.github).toMatch('github User');
    });
});

