

describe("Verify Add employee functionality ", ()=>{

    it("Verify add employee with Valid details ", ()=>{

        cy.visit(Cypress.env("loginurl"))

        cy.get('input[placeholder="Username"]').type(Cypress.env("username"))
    
        cy.get('input[name="password"]').type(Cypress.env("password"))
    
        cy.get('button[type="submit"]').click()
    
        //Asertions 
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    
        cy.contains('Dashboard').should("be.visible")
        cy.contains('PIM').click()
        cy.contains('Add Employee').click()

        cy.get('input[placeholder="First Name"]').type("Raju")

        cy.get('input[name="lastName"]').type("G")

        cy.get('button[type="submit"]').click()
        cy.contains("Successfully Saved").should('be.visible')

        
    })

    it("Verify Mandotory Details in Add employee ", ()=>{

        cy.visit('/web/index.php/auth/login')

        cy.get('input[placeholder="Username"]').type("Admin")
    
        cy.get('input[name="password"]').type("admin123")
    
        cy.get('button[type="submit"]').click()
    
        //Asertions 
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    
        cy.contains('Dashboard').should("be.visible")
        cy.contains('PIM').click()
        cy.contains('Add Employee').click()
        cy.get('button[type="submit"]').click()
        cy.contains("Required").should('be.visible')

        
    })

    it("Verify characters limit for first name field ", ()=>{

        cy.visit('/web/index.php/auth/login')

        cy.get('input[placeholder="Username"]').type("Admin")
    
        cy.get('input[name="password"]').type("admin123")
    
        cy.get('button[type="submit"]').click()
    
        //Asertions 
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    
        cy.contains('Dashboard').should("be.visible")
        cy.contains('PIM').click()
        cy.contains('Add Employee').click()

        cy.get('button[type="submit"]').click()
        cy.contains("Required").should('be.visible')

        cy.get('input[placeholder="First Name"]').type("brelgfvklernjf kewbgifhwejuf kifheiu")

        cy.contains('Should not exceed 30 characters').should('be.visible')


        
    })

})