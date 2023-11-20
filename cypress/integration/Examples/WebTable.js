/// <reference types="Cypress" />



describe("Adding things to cart and to proceed to checkout", function()
{
    it("Test Case 1", function()
    {
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('tr td:nth-child(2)').each(($e1,index,$list)=>
       {
         const text=$e1.text();
        if(text.includes('REST API Testing with SoapUI'))
        {
            cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
            {
             const priceText=price.text()
             expect(priceText).to.equal('35')
            })
        }
        })
    })

})