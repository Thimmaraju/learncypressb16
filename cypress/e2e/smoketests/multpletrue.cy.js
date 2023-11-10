describe('Demo of multiple true', () => {

    it.only('Demo test for multiple true', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('div[class="product-action"]').click({ multiple: true })
      
    })

    it('Demo test for force true', () => {

        cy.visit('https://www.cypress.io/')

        cy.contains("Installing Cypress").click({force: true})
      
    })
  })