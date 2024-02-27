class Alert{
    private alertTextButton: string = "Click for JS Alert"
    private buttonSelector: string = 'button'
    //private buttonPromptText: string = 'Click for JS Prompt'
    //popupWidnowText
    private jsAlertText: string = 'I am a JS Alert'
    private jsConfirmWindowText: string = 'I am a JS Confirm'

    private resultSelector: string = '#result'
    private resultTextJSAlret: string = "You successfully clicked an alert"
    private resultTextJSConfirm: string = "You clicked: Ok"
    private jsConfirmText: string = 'Click for JS Confirm'
    private jsPromptText: string = 'Click for JS Prompt'


    jsAlert(){
        cy.contains(this.buttonSelector, this.alertTextButton).click(); 
        cy.on("window:alert", (textAlert)=>{    
            expect(textAlert).to.equal(this.jsAlertText)
        })
        cy.on('window:confirm', ()=> true)
        cy.get(this.resultSelector).should('have.text', this.resultTextJSAlret)
    }
    jsConfirm(){
        cy.contains(this.buttonSelector,this.jsConfirmText).click()
        cy.on('window:alert',(textAlert)=>{
            expect(textAlert).to.equal(this.jsConfirmWindowText)
        })
        cy.on('window:confirm',()=>true)
        cy.get(this.resultSelector).should('have.text',this.resultTextJSConfirm)
    }
    jsPrompt(){
        const text = 'Hello World!'
        cy.window().then(($win)=>{
            cy.stub($win, "prompt").returns(text)//i'm waiting for
            cy.contains(this.buttonSelector, this.jsPromptText).click()

        })
        cy.get(this.resultSelector).should('include.text', text)

    }
    jsPrompt2(){
        const text2 = 'Hello Hello'
        cy.window().then($win => {
            cy.stub($win, 'prompt').returns(text2)
            cy.contains(this.buttonSelector, this.jsPromptText).click()
   })
   cy.get(this.resultSelector).should('include.text', text2)
    } 
}

export const AlertPage = new Alert(); 
