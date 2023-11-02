// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (value1, value2 ) => { 
    const menuitems = {

        value1 : "Admin",
        value2 : "PIM",
        value3 : "Leave",
        value4 : "Time",
        value5 : "Recruitment",
        value6 : "My Info",
    
    }
    
    
    cy.visit(Cypress.env("loginurl"))

    cy.get('input[placeholder="Username"]').type(value1)

    cy.get('input[name="password"]').type(value2)

    cy.get('button[type="submit"]').click()

    //Asertions 
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

     for (let i in menuitems){

        cy.contains(menuitems[i]).should("be.visible")
     }
    

})