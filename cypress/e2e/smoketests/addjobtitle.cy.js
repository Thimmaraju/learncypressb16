import dashboard from '../../Pages/dashboardpage.po'
import jobtitle from '../../Pages/jobtitle.po'
import data from '../../fixtures/addjobtitle.json'
describe('Verify Add job title functionality', () => {

    it('Verify Add Job title with valid Input details', () => {

        cy.login("Admin", "admin123")

        cy.contains(dashboard.adminmenu()).click()
        jobtitle.createJobTitle(data.jobtile, data.jobdescription)

    })

})