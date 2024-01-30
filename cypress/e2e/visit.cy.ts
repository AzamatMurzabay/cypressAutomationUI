import { should } from "chai";

describe('WevStited', () => {
    beforeEach(()=>{
        cy.visit('/home')
    })
    it('Verify page', () => {
        cy.title().should('eq', "UI Test Automation Playground")
    });
    it('Verify page', () => {
        cy.window().title().then(element=>{
            cy.log(element)
            expect(element === "UI Test Automation Playground").to.be.true
            cy.wrap(element).should('eq', "UI Test Automation Playground")
        })
    });
});