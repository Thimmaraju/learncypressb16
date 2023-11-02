

describe('Cypress Hooks', () => {



    after("After All", ()=>{

        cy.log("After all this line should print")
    })
    beforeEach("before Each", ()=>{

        cy.log("Before Each it block this line should print")
    })
    before("Before All", ()=>{

        cy.log("Before all this line should print")
    })

    afterEach("After each", ()=>{

        cy.log("After Each it block this line should print")
    })
    


    it('1st test case', () => {

        cy.log(" This is 1st it block body")
      
    })

    it('2nd test case', () => {
      
        cy.log(" This is 2nd it block body")
    })
  
    it('3rd test case', () => {

        cy.log(" This is 2nd it block body")
      
    })
  
  
  })

