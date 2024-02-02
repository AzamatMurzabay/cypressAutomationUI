import{LoginPage} from "../../pages/Login"
describe('Login Page', () => {
    beforeEach (() => {
        cy.visit(`${Cypress.env('demoQA')}/login`)

    })
    it('login', () => {
        cy.get('#userName').type('test')
        cy.get('#password').type('Test1234*')
        cy.contains('button', 'Login').click()
        cy.contains('Log out')
    });
    it('lotin with PageObject', ()=>{
        LoginPage.submitButtonLogin()
        cy.contains('Log out')
    })
});

