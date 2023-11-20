/// <reference types="Cypress" />



describe("Adding things to cart and to proceed to checkout", function()
{
    it("Test Case 1", function()
    {
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       cy.get('.search-keyword').type('ca')
       cy.wait(3000)
       cy.get('.products').as('PL')
       cy.get('@PL').find('.product').eq(2).contains('ADD TO CART').click()
       
       cy.get('@PL').find('.product').each(($el, index,$list)=> 
       {
        const imagetext = $el.find('h4.product-name').text()
           if( imagetext.includes('Cashews'))
           {
               cy.wrap($el).find('button').click()
           }
       })
       cy.get('.tada').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.contains('Place Order').click()

    })

})