describe('Verify google seach', () => {
  it('Validate google seaching', () => {
    cy.visit('https://www.google.com/')

    cy.get('#APjFqb').type("Raju{enter}")
   
  })
})