/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


describe("Adding things to cart and to proceed to checkout", function()
{
    it("Test Case 1", function()
    {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.frameLoaded('#courses-iframe')
       cy.iframe().find("a[href*='mentorship']").eq(0).click()
       cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
    })

})