describe('VISABLE BUTTON', () => {
    it('visable button and click', () => {
        cy.visit(Cypress.env('homeWork')); 
        cy.get('button#visibility_trigger').should('be.visable').and('exist').click(); 
        cy.get('#visibility_target').should('be.visable').and('exist').click(); 
        cy.contains('I just removed my invisibility cloak!!');
        
    });
});