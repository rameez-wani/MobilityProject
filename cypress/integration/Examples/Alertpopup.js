/// <reference types="Cypress" />



describe("Adding things to cart and to proceed to checkout", function()
{
    it("Test Case 1", function()
    {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('input[value=Alert]').click()
       cy.get('#confirmbtn').click()
       //window:alert
       cy.on('window:alert',(str)=>
       {
        expect(str).equal('Hello , share this practice page and share your knowledge')
       })
       //window:confirm
       cy.on('window:confirm',(str)=>
       {
        expect(str).equal('Hello , Are you sure you want to confirm?')
       })

       
    })

})