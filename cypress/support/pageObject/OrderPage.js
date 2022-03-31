class CartPage{

    getCountrySelect() {
        return cy.get('.wrapperTwo select')
    }
    getTermsAndConditions(){
        return cy.get('input[type="checkbox"]')
    }
    getProceedButton(){
        return cy.get('button:contains("Proceed")')
    }
    getSuccessMessage(){
        return cy.get('.wrapperTwo')
    }

}

export default CartPage;