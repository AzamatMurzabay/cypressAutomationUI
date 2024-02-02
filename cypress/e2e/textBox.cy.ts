describe('Text Box Page', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/text-box`)
    })
    it('Text Box', () => {
        cy.get('input#userName').type('LeBron James')
        cy.get('input#userEmail').type('LBJ@gmail.com')
        cy.get('textarea#currentAddress').type('2313 Ringstaff Road')
        cy.get('textarea#permanentAddress').type('Same as Current Address')
        cy.get('button#submit').click()
        cy.get('p#name').should('have.text', 'Name:LeBron James');
        cy.get('p#email').should('have.text', 'Email:LBJ@gmail.com');
        cy.get('p#currentAddress').should('have.text', 'Current Address :2313 Ringstaff Road ');
        cy.get('p#permanentAddress').should('have.text', 'Permananet Address :Same as Current Address');

    });
});