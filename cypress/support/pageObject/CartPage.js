
//reusable path
const productAreaBasePath = '.products table tbody'

class CartPage{

    //selected product section
    getSelectedProductSection() {
        return cy.get(productAreaBasePath)
    }
    getSelectedProductNameCP(){
        return cy.get(`${productAreaBasePath} .product-name`)
    }
    getSelectedProductQuantityCP(){
        return cy.get(`${productAreaBasePath} .quantity`)
    }
    getSelectedProductPriceCP(){
        return cy.get(`${productAreaBasePath} td:nth-child(4) p`)
    }
    getSelectedProductTotalPriceCP(){
        return cy.get(`${productAreaBasePath} td:nth-child(5) p`)
    }
    //other elements
    getPromoCodeApplyButton(){
        return cy.get('.promoBtn')
    }
    getPlaceOrderButton(){
        return cy.get('button:contains("Place Order")')
    }

}

export default CartPage;