import data from '../../fixtures/example.json'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    cy.log(data.body)
  })

})