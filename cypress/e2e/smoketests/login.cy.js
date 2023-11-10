describe('Verify Login functionality', () => {

  

  it('Verify Login with Valid username and Valid Password ', () => {
      cy.login("Admin", "admin123")
  })

  it('Verify Login with invalid username and Valid Password', () => {
     
    cy.visit('/web/index.php/auth/login')

    cy.failurelogin("eriuhuihfiuh", "admin123")
 
  })

  it('Verify Login with valid username and invalid Password', () => {
    cy.visit('/web/index.php/auth/login')

    cy.failurelogin("Admin", "fhfiuwehfi")
  })

  it('Verify Login with invalid username and invalid Password', () => {
    //cy.viewport(375, 667)

    //cy.viewport('ipad-2', "landscape")
    cy.visit('/web/index.php/auth/login')

    cy.failurelogin("Admghuirein", "fhfiuwehfi")
  })

})