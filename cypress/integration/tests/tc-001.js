/// <reference types="Cypress" />
import PruductsPage from "../pageObjects/productsPage"
import CheckOutPage from "../pageObjects/checkOutPage";
const productsPage= new PruductsPage();
const checkOutPage = new CheckOutPage()


describe("TS", ()=>{

    //declarando la data
let userdata
before(function(){
    cy.fixture("example").then(function(data){
        userdata = data
    })
})

it("un caso de prueba", ()=>{

//Ingresando a la pagina
cy.visit(Cypress.env("baseUrl"))

//Haciendo log in
cy.openLogin(userdata.username, userdata.password)
cy.wait(8000)

//Comprobando ingreso de pagina
productsPage.shopName().then((header)=>{
    let htext= header.text()
    expect(htext.includes(userdata.header)).to.be.true
})

//Agregando producto al carrito
cy.selectProduct(userdata.productName)

//Yendo al carrito
productsPage.checkOutBtn().click()

//haciendo checkout
cy.checkOut(userdata.country)

//Comprobando mensage
checkOutPage.alert().then(function(element){

    const actualText = element.text()
    expect(actualText.includes('Success')).to.be.true
})


})


})
