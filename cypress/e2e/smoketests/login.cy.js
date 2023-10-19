describe('Verify Login functionality', () => {

  it('Verify Login with Valid username and Valid Password ', () => {
      cy.login("Admin", "admin123")
  })

  it('Verify Login with invalid username and Valid Password', () => {
     
    cy.visit('/web/index.php/auth/login')

    cy.get('input[placeholder="Username"]').type("efeehb")

    cy.get('input[name="password"]').type("admin123")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })

  it('Verify Login with valid username and invalid Password', () => {
    cy.visit('/web/index.php/auth/login')

    cy.get('input[placeholder="Username"]').type("Admin")

    cy.get('input[name="password"]').type("wbfbhewf")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })

  it('Verify Login with invalid username and invalid Password', () => {
    //cy.viewport(375, 667)

    cy.viewport('ipad-2', "landscape")
    cy.visit('/web/index.php/auth/login')

    cy.get('input[placeholder="Username"]').type("weughuye")

    cy.get('input[name="password"]').type("wbfbhewf")

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials').should("be.visible")
  })

  

})