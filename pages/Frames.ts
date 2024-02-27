class AutoFrames {
  //buttons_locators
  private button1: string = "#click_me_1";
  private button2: string = "#click_me_2";
  private button4: string = "#click_me_4";
  //button_text
  private text1: string = "click_me_1";
  private text2: string = "click_me_2";
  private text4: string = "click_me_4";
  //button_text_changed
  private textChanged: string = "Clicked";
  //frame_locators
  private iframe1: string = "#frame1";
  private iframe2: string = "#frame2";
  private iframe3: string = "#frame3";
  private iframe4: string = "#frame4";
  private iframe3TitleText: string = "Frame3 (ID=frame3)";
  private iframe3Title: string = '[class="navbar-brand"]';

  visit() {
    cy.visit(`${Cypress.env("automationCamp")}/frames.html`);
  }
  getIframe1() {
    cy.get(this.iframe1).then((frame1) => {
      const Button1 = frame1.contents().find(this.button1);
      cy.wrap(Button1).should("have.text", this.text1).click();
      cy.wrap(Button1).should("have.text", this.textChanged);
    });
  }

  getIframe2() {
    cy.get(this.iframe1).then((frame1) => {
      const Frame1 = frame1.contents();
      cy.wrap(Frame1)
        .find(this.iframe2)
        .then((frame2) => {
          const Button2 = frame2.contents().find(this.button2);
          cy.wrap(Button2).should("have.text", this.textChanged);
        });
    });
  }

  getIframe3() {
    cy.get(this.iframe1).then((frame1) => {
      const Frame1 = frame1.contents();
      cy.wrap(Frame1)
        .find(this.iframe3)
        .then((frame3) => {
          const FrameTitile3 = frame3.contents().find(this.iframe3Title);
          cy.wrap(FrameTitile3).should("have.text", this.iframe3TitleText);
        });
    });
  }
  getIframe4() {
    cy.get(this.iframe1).then((frame1) => {
      const Frame1 = frame1.contents();
      cy.wrap(Frame1)
        .find(this.iframe3)
        .then((frame3) => {
          const Frame3 = frame3.contents();
          cy.wrap(Frame3)
            .find(this.iframe4)
            .then((frame4) => {
              const Button4 = frame4.contents().find(this.button4);
              cy.wrap(Button4).should("have.text", this.text4).click();
              cy.wrap(Button4).should("have.text", this.textChanged);
            });
        });
    });
  }
}
export const AutoFramesPage = new AutoFrames();
