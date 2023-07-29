class CheckOutPage{



    checkOut(){
        return cy.get('.btn.btn-success')
    }

    country(){
        return cy.get('#country')
    }

    suggestion(){
        return cy.get('.suggestions > ul > li > a')
    }

    agreeBox(){
        return cy.get('input#checkbox2')
    }
    
    purchaseBtn(){
        return cy.get('input[type="submit"]')
    }

    alert(){
        return cy.get('.alert')
    }
}
export default CheckOutPage;