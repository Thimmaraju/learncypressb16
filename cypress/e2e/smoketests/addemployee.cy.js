
import addemployee from "../../Pages/addemployee.po"
import dashboard from "../../Pages/dashboardpage.po"
import logindata from '../../fixtures/logindata.json'

describe(`Verify Add employee functionality`, ()=>{

    beforeEach("before Each", ()=>{

        cy.login(logindata.username, logindata.password)
        cy.contains(dashboard.pimmenu()).click()
        cy.contains(addemployee.addEmployeeSubmenu()).click() 
    })

    it.skip("Verify add employee with Valid details ", ()=>{

    

        cy.get(addemployee.firstnameInput()).type("Raju")

        cy.get(addemployee.lastnameInput()).type("G")

        cy.get(addemployee.saveButton()).click()
        cy.contains(addemployee.successmessage()).should('be.visible')

        
    })

    specify("Verify Mandotory Details in Add employee ", ()=>{
      
    
       
        cy.get(addemployee.saveButton()).click()
        cy.contains(addemployee.firstnameErrorMessage()).should('be.visible')

        
    })

    it("Verify characters limit for first name field ", ()=>{


        cy.get(addemployee.saveButton()).click()
        cy.contains(addemployee.firstnameErrorMessage()).should('be.visible')

        cy.get(addemployee.firstnameInput()).type("brelgfvklernjf kewbgifhwejuf kifheiu")

        cy.contains(addemployee.exccesdlimiterrorMessage()).should('be.visible')


        
    })

})