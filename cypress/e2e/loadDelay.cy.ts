describe('LOAD DELAY', () => {
    it('load delay emulated failing', () => {
        cy.visit('/', {timeout: 0});
    });
    it('load delay emulated', () => {
        cy.visit('/', {timeout: 2_000});
        cy.get('[href="/loaddelay"]').click();
        cy.contains('button', 'Button Appearing After Delay');
    });
});