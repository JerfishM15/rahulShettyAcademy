class LoginPage {


    usernameField(){

    return cy.get("#username")
    }

    passwordField(){
    return cy.get("#password")
    }

    dropdown(){
    return cy.get("select.form-control")
    }

    agreeTerms(){
    return cy.get("#terms")
    }

    signBtn(){
    return cy.get("#signInBtn")
    }

    checkMark(){
        return cy.get(':nth-child(2) > .checkmark')
    }

    }

    export default LoginPage;