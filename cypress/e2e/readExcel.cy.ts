describe("EXCEL", () => {
  it("rading excel", () => {
    cy.readingXlsx("cypress/fixtures/excelData.xlsx").then((data) => {
      cy.log(data);
      cy.log(data[0]);
      cy.log(data[0].data[0]);
      cy.log(data[0].data[1]);
      cy.log(data[0].data[2]);
    });
  });

  it("write data to json doc and the use it to login", () => {
    cy.readingXlsx("cypress/fixtures/excelData.xlsx").then((data) => {
      cy.log(data);
      cy.log(data[0]);
      cy.log(data[0].data[0]);
      cy.log(data[0].data[0][0]);
      cy.log(data[0].data[0][1]);
      let email = data[0].data[0][0];
      let password = data[0].data[0][1];
      cy.writeFile("cypress/fixtures/login.jason", {
        email: email,
        password: password,
      });
      cy.fixture("login.json").then((login) => {
        cy.log(login);
      });
    });
  });
  it.only("write data to json doc and the use it to login", () => {
    cy.readingXlsx("cypress/fixtures/excelData.xlsx").then((data) => {
      cy.log(data);
      cy.log(data[0]);
      cy.log(data[0].data[0]);
      cy.log(data[0].data[0][0]);
      cy.log(data[0].data[0][1]);
      let email = data[0].data[0][0];
      let password = data[0].data[0][1];
      cy.writeFile("cypress/fixtures/login.json", {
        email: Cypress.env("email"),
        password: Cypress.env("password"),
      });
      cy.fixture("login.json").then((login) => {
        cy.log(login);
        cy.apiLogin(login.email, login.password);
        cy.visit("https://stage.pasv.us/profile/65d4265ddb75721937e5329c");
        //cy.contains("Azamat Murzabyev");
      });
    });
  });
});
