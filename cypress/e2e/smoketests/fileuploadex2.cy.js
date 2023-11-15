///<reference types="cypress"/>


describe('Automation - File Upload Example - 2', function () {

    it.only('Cypress Test Case - Understanding upload file - 2', function () {
  
      cy.visit('https://the-internet.herokuapp.com/upload');

      //cy.get('#file-upload').attachFile('module1/test.txt');
      
      cy.fileupload('//*[@id="file-upload"]','module1/test.txt')
      cy.get('#file-submit').click();

      cy.get('#uploaded-files').contains('test.txt')
    
    })

    // // Import 

    it.only('Cypress Test Case - Understanding Download file', function () {
  
        cy.downloadFile("https://images.unsplash.com/photo-1618281377501-88c2328cbb9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBwYXJyb3R8ZW58MHx8MHx8&w=1000&q=80", "cypress/Raju" , "parrot.jpg" )
        cy.readFile('cypress/Raju/parrot.jpg').should('exist')
      
      })

      it.only('Cypress Test Case - Understanding Download file - PDF ', function () {
  
        cy.downloadFile("https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB-CTFL_Syllabus_2018_v3.1.1.pdf", "cypress/downloads" , "ISTQBsyllabus.pdf" )
        
        cy.readFile('cypress/Raju/ISTQBsyllabus.pdf').should('exist')
      
      })

    //   // Export 

  })