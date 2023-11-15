///<reference types="cypress"/>


describe('Automation - Write file and Read file ', function () {

    it.only('Cypress Test Case - Write file example', function () {

        
        cy.writeFile('cypress/fixtures/module1/test.txt', "Raju123\n")

 
     
    })


    it.only('Cypress Test Case - Append Data in end to the file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/test.txt', "Cypress Trainer",{flag: 'a+'});
     
    })

    it.only('Cypress Test Case - Create Json file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/test6.json', { firstname: 'G', lastname: 'Thimmaraju'});
     
    })

    it.only('Cypress Test Case - Validation of Data both Text file and Json ', function () {
        
        cy.readFile('cypress/fixtures/createemployee.json').should('exist')

        cy.readFile('cypress/fixtures/createemployee.json').its('firstname').should('eq','Poornima')

         cy.readFile('cypress/fixtures/module1/test6.json').its('firstname').should('eq','G')

         cy.readFile('cypress/fixtures/module1/test.txt').should('contain','Cypress Trainer');

        cy.readFile('cypress/fixtures/module1/test.txt').should('contain','Raju123\nCypress Trainer')       
    })


    it('Cypress Test Case - Capture Text ', function () {
        
        cy.visit("/")
        cy.xpath(login.Orangehrmlogo).should("be.visible")
        //actions
        cy.login(logindata.username, logindata.password)
    
        //Assertions
    
        cy.url().should("eq", logindata.dashboardurl)
    
        cy.url().should("include", logindata.partialdashurl)
    
        //or
        cy.contains(dashboard.dashboardpageheader()).should("be.visible")

        cy.contains("Buzz").click()
    
       cy.xpath("(//div[@class='orangehrm-buzz-post-body']/p)[3]").then((txt) =>{

             var textvalue = txt.text()

             cy.writeFile('cypress/fixtures/module1/test5.txt', textvalue)
             cy.writeFile('cypress/fixtures/module1/test5.json', { text: textvalue});    

       })
    })

  })