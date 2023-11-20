/// <reference types="Cypress" />


describe("Adding things to cart and to proceed to checkout", function()
{
    it("Test Case 1", function()
    {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('.mouse-hover-content').invoke('show')
       cy.contains('Top').click()
       cy.contains('Top').click({force:true})
       cy.url().should('include','top')

    })

})