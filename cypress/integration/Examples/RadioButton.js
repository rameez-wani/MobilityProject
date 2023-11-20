/// <reference types="Cypress" />



describe("Adding things to cart and to proceed to checkout", function()
{
    it("Test Case 1", function()
    {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('input[value=radio2]').click().should('be.checked')
    })

})