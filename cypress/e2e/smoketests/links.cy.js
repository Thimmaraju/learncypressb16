
describe('Automation - Working With Links', function () {
  
  it('Cypress Test Case - Understanding Links and how to work with Links', function () {
    cy.visit('https://www.wikipedia.org/');

    cy.get("a").should('have.length', 331)

    cy.get('a').contains('Commons').click();

    // cy.url().should("include", "wiki/Main_Page")

    // cy.url().should("eq", "https://commons.wikimedia.org/wiki/Main_Page")

   cy.origin('https://commons.wikimedia.org', () => {
      
        cy.url().should("include", "wiki/Main_Page")
      
       cy.get('.mainpage-welcome-sitename').should('contain.text', 'Wikimedia Commons');
     
       cy.get('a').should('have.length', 694)
        
        
    //Interview question



      cy.get('a').its('length').then((elelength) => {
        var lengthcount = elelength
        cy.log(lengthcount)
        
      })

      cy.get('a').should('have.length', lengthcount)

  //     cy.get('.vector-menu-content-list').eq(5).find('a').its('length').then((elelength) => {
  //       cy.log(elelength)
  //       expect(elelength).to.equal(5)
  //     })


  //     cy.get('.mw-halign-right +div').last().then((txt) =>{

  //          var eletext = txt.text()

  //          cy.log(eletext)
  //          cy.writeFile('cypress/fixtures/module2/test4.txt',eletext);
  //     })

  //     cy.get('.vector-menu-content-list').eq(5).find('a').then((txt) => {
  //       var x = txt.text()
  //       cy.log(x)
  //     })


  //     cy.get('a[href="/wiki/Main_Page"]>span').last().then((txt) => {
  //       let y = txt.text()
  //       cy.log(y)
  //       expect(y).to.equal("Main page")
  //       //cy.writeFile('cypress/fixtures/module2/test4.txt',y);
  //     })

     })

  })

})