

describe(`Verify Add employee functionality`, ()=>{

    beforeEach("before Each", ()=>{

        cy.login("Admin", "admin123")
        cy.contains('PIM').click()
        cy.contains('Add Employee').click() 
    })

    it.skip("Verify add employee with Valid details ", ()=>{

    

        cy.get('input[placeholder="First Name"]').type("Raju")

        cy.get('input[name="lastName"]').type("G")

        cy.get('button[type="submit"]').click()
        cy.contains("Successfully Saved").should('be.visible')

        
    })

    specify("Verify Mandotory Details in Add employee ", ()=>{
      
    
       
        cy.get('button[type="submit"]').click()
        cy.contains("Required").should('be.visible')

        
    })

    it("Verify characters limit for first name field ", ()=>{


        cy.get('button[type="submit"]').click()
        cy.contains("Required").should('be.visible')

        cy.get('input[placeholder="First Name"]').type("brelgfvklernjf kewbgifhwejuf kifheiu")

        cy.contains('Should not exceed 30 characters').should('be.visible')


        
    })

})