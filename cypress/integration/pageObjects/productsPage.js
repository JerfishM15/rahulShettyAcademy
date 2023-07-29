class PruductsPage{



    shopName(){
       return cy.get("h1.my-4")
    }



    itemName(){

        return cy.get(".card-title")

    }


    addItemBtn(){
        return cy.get('button.btn.btn-info')
    }


    checkOutBtn(){
        return cy.get('.nav-link.btn.btn-primary')
    }

















}
export default PruductsPage;