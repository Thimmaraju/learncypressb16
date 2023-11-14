///<reference types="cypress"/>

describe('Automation - Working with Shadowroot elements 2', function () {

  it('Cypress Test Case - Shadow', function () {

    cy.visit('http://watir.com/examples/shadow_dom.html');

   // cy.get("input[type='text']").type("cypress");


    //  cy.get('#shadow_host').shadow().find('[type="checkbox"]').check()

     cy.get('#shadow_host').shadow().find("input[type='text']").type("Raju")
     cy.get('#shadow_host').shadow().find('input[type="checkbox"]').check()

  })

})


