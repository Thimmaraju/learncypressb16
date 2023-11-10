describe('Verify google seach', () => {
  it('Validate google seaching', () => {
    cy.visit('https://www.google.com/')

    cy.get('#APjFqb').type("Raju{enter}")

    cy.wait(5000)
    cy.reload()

    cy.go(-1)
    cy.wait(5000)
    cy.go(1)
   
  })
})