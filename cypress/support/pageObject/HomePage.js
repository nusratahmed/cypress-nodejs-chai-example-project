
//reusable path
const cartAreaBasePath = '.cart-preview.active'
const productQuantityManageBasePath = '.stepper-input'

class HomePage{

    //common base path
    getBuyingItemInfoHomePageBasePath() {
        return cy.get('.cart-info')
    }
    getCartAreaBasePath(){
        return cy.get(cartAreaBasePath)
    }
    getProductQuantityManageBasePath(){
        return cy.get(productQuantityManageBasePath)
    }
    //page header elements
    getCompanyName (){
        return cy.get('.brand.greenLogo')
    }
    getSearchBox(){
        return cy.get('[type=search]')
    }
    getSearchButton(){
        return cy.get('.search-button')
    }
    getItemQuantity(){
        return cy.get('.cart-info tr:nth-child(1) td:nth-child(3) strong')
    }
    getItemPrice(){
        return cy.get('.cart-info tr:nth-child(2) td:nth-child(3) strong')
    }
    getAddCartIcon(){
        return cy.get('.cart-icon img')
    }
    //home page cart section's elements
    getEmptyCart(){
        return cy.get(`${cartAreaBasePath} .empty-cart`)
    }
    getEmptyCartText(){
        return cy.get(`${cartAreaBasePath} h2`)
    }
    getProccedToCheckoutButton(){
        return cy.get(`${cartAreaBasePath} button`)
    }
    getProductRemoveIcon(){
        return cy.get(`${cartAreaBasePath} .product-remove`)
    }
    getSelectedProductNameHP(){
        return cy.get(`${cartAreaBasePath} .product-name`)
    }
    getSelectedProductQuantityHP(){
        return cy.get(`${cartAreaBasePath} .quantity`)
    }
    getSelectedProductPriceHP(){
        return cy.get(`${cartAreaBasePath} .product-price`)
    }
    //product section's elements
    getProductImage(){
        return cy.get('.product-image')
    }
    getProductName(){
        return cy.get('h4.product-name')
    }
    getProductPrice(){
        return cy.get('p.product-price')
    }
    getProductQuantity(){
        return cy.get('.quantity')
    }
    getProductAddButton(){
        return cy.get('.product-action [type=button]')
    }
    getProductQuantityIncrement(){
        return cy.get(`${productQuantityManageBasePath} .increment`)
    }
    getProductQuantityDecrement(){
        return cy.get(`${productQuantityManageBasePath} .decrement`)
    }
    getProductTotalQuantity(){
        return cy.get(`${productQuantityManageBasePath} [type=number]`)
    }
    getNoResultMessage(){
        return cy.get('.no-results > h2')
    }

}

export default HomePage;