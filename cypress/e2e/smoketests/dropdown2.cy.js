describe("select box", () => {

    it("should load website with select box", () => {

      Cypress.on("uncaught:exception", () => {
  
        return false;
      });
      
       
      cy.visit("https://chercher.tech/practice/dropdowns");

      cy.get("#order-changed").select(3);

    });
    
  });