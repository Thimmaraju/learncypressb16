
const availablefixtures = [
    {
        "name": "registerdata",
        "context": "1"
    },
    {
        "name": "registerdataganesh",
        "context": "2"
    },
    ,
    {
        "name": "registerdatahari",
        "context": "3"
    }
]


describe('Automation Test Suite - create employees', function () {
    //loop through both the fixtues 
    availablefixtures.forEach((afixture) => {
        describe(afixture.context, () => {
            //Mostly used for Setup Part
            before(function () {
                cy.fixture(afixture.name).then(function (data) {
                    this.data = data;
                })
            })

            it('Cypress Test Case - add employee', function () {

                cy.visit('https://shop.demoqa.com/my-account/');


                //cy.wait(40000)
                cy.get("#reg_username").type(this.data.username)

                cy.get("#reg_email").type(this.data.emailaddress)

                cy.get("#reg_password").type(this.data.weakpassword)

                cy.get('button[name="register"]').should("be.disabled");

                //or
                //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
                cy.get('button[name="register"]').should('have.attr', 'disabled', 'disabled');

                // cy.get("#reg_password").clear()

                cy.wait(15000)

                cy.get("#reg_password", { timeout: 40000 }).clear().type(this.data.strongpassword)

                cy.wait(5000)

                cy.get('button[name="register"]').click()

                // //cy.get('locator').should('have.attr', 'attributename', 'Attributevalue');
                cy.get("#username").should('have.attr', 'value', this.data.username)

                // //or

                cy.get("#username").should("have.value", this.data.username)

                cy.contains(" An account is already registered with your email address. ").should("be.visible")
            })

        })
    })
})

