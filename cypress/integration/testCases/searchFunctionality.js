
/// <reference types="Cypress" />
import HomePage from '../../support/pageObject/HomePage'

describe('Search Functionality', function() {

    before(() => {
        cy.visit(Cypress.env('url'))
    })

    beforeEach(() => {
        cy.fixture('variables').then(function(data){
            this.data = data;
        })
    })
    
    it('Search with valid data',function() {
    
        const homepage = new HomePage()
        homepage.getSearchBox().should('be.visible').type(this.data.specificProductName)
        cy.wait(2000)
        homepage.getProductImage().should('be.visible')
        homepage.getProductName().contains(this.data.specificProductName)
        homepage.getSearchBox().clear()
        
    })

    it('Search with invalid data',function() {
    
        const homepage = new HomePage()
        homepage.getSearchBox().should('be.visible').type(this.data.specificInvalidProductName)
        cy.wait(2000)
        homepage.getNoResultMessage().should('be.visible')
        homepage.getNoResultMessage().contains(this.data.invalidSearchMessage)
        homepage.getSearchBox().clear()
        
    })

    it('Search with specific letters',function() {

        const homepage = new HomePage()
        homepage.getSearchBox().should('be.visible').type(this.data.specificLetters)
        cy.wait(2000)
        homepage.getProductName().each(($productName) => {expect($productName.text()).contains(this.data.specificLetters)}) 
        homepage.getSearchBox().clear()
        
    })

})