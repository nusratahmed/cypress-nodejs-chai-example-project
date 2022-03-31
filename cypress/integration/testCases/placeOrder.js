
/// <reference types="Cypress" />
import HomePage from '../../support/pageObject/HomePage'
import CartPage from '../../support/pageObject/CartPage'
import OrderPage from '../../support/pageObject/OrderPage'
 
describe('Place order with one product', function() {

    before(() => {
        cy.visit(Cypress.env('url'))
        cy.fixture('variables').then(function(data){
            this.data = data;
        })
    })
        
    it('Full order process end to end',function() {

    const homepage = new HomePage()
    const cartPage = new CartPage()
    const orderPage = new OrderPage()

    cy.visit(Cypress.env('url'))
    homepage.getSearchBox().type(this.data.specificProductName)
    cy.wait(2000)
    homepage.getProductImage().should('be.visible')
    homepage.getProductName().contains(this.data.specificProductName)
    homepage.getProductQuantityIncrement().click()

    //stored all info
    homepage.getProductName().invoke('text').as('selectedProductName')
    homepage.getProductPrice().invoke('text').as('selectedProductPrice')
    homepage.getProductQuantity().invoke('attr', 'value').as('selectedProductQuantity')

    //proceed to cart page
    homepage.getProductAddButton().click()
    homepage.getAddCartIcon().click()
    homepage.getProccedToCheckoutButton().click()

    //verify cart page information
    cartPage.getSelectedProductSection().should('be.visible')
    cy.get('@selectedProductName').then((selectedProductName) => {
        cartPage.getSelectedProductNameCP().should('have.text',selectedProductName)
    })
    cy.get('@selectedProductPrice').then((selectedProductPrice) => {
        cartPage.getSelectedProductPriceCP().should('have.text',selectedProductPrice)
    })
    cy.get('@selectedProductQuantity').then((selectedProductQuantity) => {
        cartPage.getSelectedProductQuantityCP().should('have.text',selectedProductQuantity)
    })
    //total price check
    cartPage.getSelectedProductTotalPriceCP().should('be.visible').invoke('text').as('totalPrice').get('@totalPrice').then((totalPrice) => {
        expect(parseInt(totalPrice)).to.equal(240)
    })
    cartPage.getPromoCodeApplyButton().should('be.visible')
    cartPage.getPlaceOrderButton().click()

    //confirm order
    orderPage.getCountrySelect().should('be.visible')
    orderPage.getCountrySelect().select(this.data.specificCountryName)
    orderPage.getTermsAndConditions().click()
    orderPage.getProceedButton().click()
    orderPage.getSuccessMessage().should('be.visible')
    cy.wait(5000)
    homepage.getCompanyName().should('be.visible')
    
    })
  
})