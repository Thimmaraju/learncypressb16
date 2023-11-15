///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').attachFile('module2/test4.txt');
      
      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    
    it.only('Cypress Test Case - Understanding upload file - Select file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').selectFile('D:/LearncypresssB16/cypress/fixtures/module2/test4.txt');
    

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
      cy.wait(10000)
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    it('Cypress Test Case - Understanding download file ', function () {
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.downloadFile("https://i0.wp.com/www.theculturemap.com/wp-content/uploads/2012/06/Leaning-Tower-of-Pisa1.jpg?fit=2590%2C2303&ssl=1", "cypress/downloads", "leaningtowe"+r+".png")
      cy.readFile("cypress/downloads/leaningtowe"+r+".png").should('exist')
    })

    it('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://www.tajmahal.gov.in/images/nightview.jpg","cypress/downloads", "tajmahal.jpg")
      cy.readFile('cypress/downloads/tajmahal.jpg').should('exist')
    })

  })