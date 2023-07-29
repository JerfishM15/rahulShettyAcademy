import LoginPage from "../integration/pageObjects/loginPage"
import PruductsPage from "../integration/pageObjects/productsPage";
import CheckOutPage from "../integration/pageObjects/checkOutPage";
const loginPage = new LoginPage();
const productsPage = new PruductsPage();
const checkOutPage = new CheckOutPage();

Cypress.Commands.add("openLogin",(username, password)=>{

loginPage.usernameField().type(username)
loginPage.passwordField().type(password)
//loginPage.checkMark().click()
loginPage.dropdown().select('Teacher')
loginPage.agreeTerms().check()
loginPage.signBtn().click()

} )
/*
Cypress.Commands.add("selectItem", (product)=>{

    productsPage.itemName().each(($el, index, list)=>{

        if($el.text().includes(product)){
            productsPage.addItem().eq(index).click()
        }
    })
})
*/
/*
Cypress.Commands.add('selectProduct', ( productName)=>{
    productsPage.itemName().each(($el, index, $list) =>{

        if($el.text().includes(productName)){
            productsPage.addItemBtn().eq(index).click();
        }
        
    } )
})
*/
Cypress.Commands.add('selectProduct', ( productName)=>{
    productsPage.itemName().each(($el, index, $list) =>{

        if($el.text().includes(productName)){
            productsPage.addItemBtn().eq(index).click()
        }
        
    } )
})


Cypress.Commands.add('checkOut', (country)=>{

checkOutPage.checkOut().click()
checkOutPage.country().type(country)
cy.wait(5000)
checkOutPage.suggestion().click()
checkOutPage.agreeBox().check({force:true})
checkOutPage.purchaseBtn().click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })