/// <reference types="cypress" />
describe('Example shows how to work with browser windows.', () => {
  it('Example shows how to work witn button that opens new tab without "target: _blank" and "href" attributes.', () => {
    Cypress.on("uncaught:exception", () => {

      return false;
    });

    cy.visit('https://demoqa.com/browser-windows', {
      onBeforeLoad(win) {
        cy.stub(win, 'open')
      }
    });

    cy.log("loginsteps")
    cy.get('#tabButton').click();
    cy.window().its('open').should('be.called');
    cy.visit('https://demoqa.com/sample')

    cy.get("#sampleHeading").should("be.visible")
  });
});
