/// <reference types="Cypress" />



describe("Adding things to cart and to proceed to checkout", function()
{
    it("Test Case 1", function()
    {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('#opentab').invoke('removeAttr','target').click()
       //cy.get('#opentab').click()
       cy.origin('https://www.qaclickacademy.com', () => 
       {

       cy.get("#navbarSupportedContent a[href*='about']").click()
       cy.get('.mt-50 h2').should('contain','QAClick Academy ')


        })
       
    })

})