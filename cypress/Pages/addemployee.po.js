class AddEmployeePage{

    addEmployeeSubmenu(){

        return 'Add Employee'
    }

    firstnameInput(){

        return 'input[name="firstName"]'
    }

    firstnameErrorMessage(){

        return "Required"
    }

    exccesdlimiterrorMessage(){

        return 'Should not exceed 30 characters'
    }
    lastnameInput(){

        return 'input[name="lastName"]'  
    }

    saveButton(){

        return 'button[type="submit"]'
    }

    successmessage(){

        return "Successfully Saved"
    }
}

const addemployee = new AddEmployeePage()

export default addemployee