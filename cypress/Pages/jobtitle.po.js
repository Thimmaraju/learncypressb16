class JobTitlePage {

    jobSubMenu = "Job"
    jobtitlesOption = "Job Titles"
    addbutton = 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
    jobtitleInput() {

        return "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input"
    }

    jobDescriptionInput() {

        return 'textarea[placeholder="Type description here"]'
    }

    saveButton() {

        return 'button[type="submit"]'
    }

    successmessage() {

        return 'Successfully Saved'
    }


    createJobTitle(jobtitle, jobdescription) {

        cy.contains(this.jobSubMenu).click()
        cy.contains(this.jobtitlesOption).click()

        cy.get(this.addbutton).click()

       let RandomText =  (Math.random() + 1).toString(36).substring(7);
        cy.get(this.jobtitleInput()).type(jobtitle+RandomText)

        cy.get(this.jobDescriptionInput()).type(jobdescription)

        cy.get(this.saveButton()).click()
        cy.contains(this.successmessage()).should('be.visible')

    }
    selectMonth(monthname){

        cy.get('select[name*="DOB_Month"]').select(monthname)

    }

    entertextinAlert(text){

        cy.window().then(($win) => {

            cy.stub($win, 'prompt').returns(text);
            cy.contains('Click for JS Prompt').click();
        })
    }
    
}

const jobtitle = new JobTitlePage()

export default jobtitle