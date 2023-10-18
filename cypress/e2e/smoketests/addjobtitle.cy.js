import data from '../../fixtures/addjobtitle.json'
describe('Verify Add job title functionality', () => {

    it('Verify Add Job title with valid Input details', () => {

        cy.visit('/web/index.php/auth/login')

    cy.get('input[placeholder="Username"]').type(Cypress.env("username"))

    cy.get('input[name="password"]').type(Cypress.env("password"))

    cy.get('button[type="submit"]').click()

    //Asertions 
    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    cy.contains('Dashboard').should("be.visible")

    cy.contains('Admin').click()

    cy.contains('Job').click()
    cy.contains("Job Titles").click()

    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

    cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(data.jobtile)

    cy.get('textarea[placeholder="Type description here"]').type(data.jobdescription)

    cy.get('button[type="submit"]').click()
    cy.contains("Successfully Saved").should('be.visible')
    })

  })