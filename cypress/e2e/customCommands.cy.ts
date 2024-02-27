//import{LoginPage} from "../../pages/Login"
describe('Login Page', () => {
    beforeEach (() => {
        cy.visit(`${Cypress.env('demoQA')}/login`)

    })
    it('login', () => {
        //cy.get('#userName').type('test')
        // cy.get('#password').type('Test1234*')
        // cy.contains('button', 'Login').click()
        cy.login('test', 'Test1234*')
        cy.contains('Log out')
    });
    it.skip('lotin with PageObject', ()=>{
        cy.contains('Log out')
    })
});
