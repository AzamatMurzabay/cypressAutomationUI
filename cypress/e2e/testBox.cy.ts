describe("Test textBox", () => {
        it("test", () => {
            cy.visit("https://uitestingplayground.com/textinput")
            cy.get("#newButtonName").type("Hello world")
            cy.get("#updatingButton").click()
            cy.contains("button", "Hello world")
            cy.get("#updatingButton").should("have.text", "Hello world")
            cy.get("#updatingButton").then(el => {
               expect(el.text()).to.equal("Hello world")
            })
        })
    })