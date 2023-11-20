/// <reference types="Cypress" />



describe("Adding things to cart and to proceed to checkout", function()
{
    it("Test Case 1", function()
    {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

       //static dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic dropdown
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1,index,$list) =>
        {
            if($e1.text()==='India')
            {
        
             cy.wrap($e1).click()
            }
        })




    })

})