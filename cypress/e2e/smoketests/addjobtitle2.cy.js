import dashboard from '../../Pages/dashboardpage.po'
import jobtitle from '../../Pages/jobtitle.po'

describe('Verify Add job title functionality', function() {

    before(function () {
        cy.fixture('addjobtitle').then(function (data) {
          this.data = data;
        })
      })

    it('Verify Add Job title with valid Input details', function() {

        cy.login("Admin", "admin123")

        cy.contains(dashboard.adminmenu()).click()
        jobtitle.createJobTitle(this.data.jobtile, this.data.jobdescription)

    })

})