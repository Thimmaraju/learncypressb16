import data from '../../fixtures/registerdataganesh.json'
describe('Understanding Fixtures',function ()  {



    it('Validate register flow ', function ()  {
      cy.visit('https://shop.demoqa.com/my-account/');


      //cy.wait(40000)
      cy.get("#reg_username").type(data.username)

      cy.get("#reg_email").type(data.emailaddress)

       cy.get("#reg_password").type(data.weakpassword)

       cy.get('button[name="register"]').should("be.disabled");

    //or
    //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
       cy.get('button[name="register"]').should('have.attr', 'disabled', 'disabled');
     cy.wait(10000)
    // cy.get("#reg_password").clear()

     cy.wait(15000)

      cy.get("#reg_password").clear().type(data.strongpassword)

     cy.wait(5000)

     cy.get('button[name="register"]').click()

      // //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
     cy.get("#username").should('have.attr', 'value', data.username)

      // //or

     cy.get("#username").should("have.value", data.username)
      
     cy.get(".woocommerce-error > li >strong").should("be.visible")
    })
  
  })