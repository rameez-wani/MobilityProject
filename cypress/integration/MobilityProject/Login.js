///<reference types="Cypress"/>

describe('Login Page', function()
{

   // All fields are visible

   it("All fields are visible",function()
 {
    cy.visit("http://sap.f2wmobi.de/")
    cy.get('.login-logo').should('be.visible')
    cy.get('div.login-left>.MuiTypography-root:nth-child(1)').should('have.text',"Welcome to ")
    cy.get('div.login-left>.MuiTypography-root:nth-child(2)').should('have.text',"MOBILITY BUDGET MANAGEMENT")
    cy.get("div.login-left>.MuiTypography-root:nth-child(3)").should('have.text',"Streamline your mobility expenses with budget management")
    cy.get('form.MuiBox-root>.MuiTypography-root:nth-child(1)').should('have.text',"Login")
    cy.get('form.MuiBox-root>.label:nth-child(2)').contains('Email Address')
    cy.get('span.asterisk:nth-child(1)').should('be.visible')
    cy.get('form.MuiBox-root>.label:nth-child(4)').contains("Password")
    cy.get('span.asterisk:nth-child(1)').should('be.visible')
    cy.get('span.MuiTypography-root:nth-child(2)').should('have.text',"Remember Me")
    cy.get('a.label').should('have.text',"Forgot Password?")
    cy.get("button[type='submit']").should('be.visible')  
    cy.get('.css-1f7c9pe-MuiGrid-root').should('be.visible')
    
 })

 // Valid Credentials

 it('Valid Credentials', function()
 {
    cy.visit("http://sap.f2wmobi.de/")
    cy.get('#emailaddress').type('sap.admin@yopmail.com')
    cy.get('#password').type('Admin@123')
    cy.get("button[type='submit']").click()
    cy.get('.MuiContainer-root > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .drawer-top > .css-old1by >  .MuiBox-root').should('be.visible')

 })

// Show Password

 it('Show Password', function()
 {
    cy.visit("http://sap.f2wmobi.de/")
    cy.get('#emailaddress').type('sap.admin@yopmail.com')
    cy.get('#password').type('Admin@123')
    cy.get('.MuiInputAdornment-positionEnd > .MuiButtonBase-root').click()
    cy.get('#password').should('have.value','Admin@123')
    
 })

// Without entering any credentials

 it('Without entering any credentials',function()
 {
    cy.visit("http://sap.f2wmobi.de/")
    cy.get("button[type='submit']").click()
    cy.get('form.MuiBox-root>p.MuiTypography-root:nth-child(4)').should('have.text',"Please enter email address")
    cy.get('form.MuiBox-root>p.MuiTypography-root:nth-child(7)').should('have.text',"Please enter password")
 })

 // Invalid data in e-mail address

 it('Invalid data in e-mail address',function()
 {
    cy.visit("http://sap.f2wmobi.de/")
    cy.get('#emailaddress').type('abc123')
    cy.get('#password').type('Admin@123')
    cy.get("button[type='submit']").click()
    cy.get('form.MuiBox-root>p.MuiTypography-root:nth-child(4)').should('have.text',"Please enter valid email address")
 })

 // Invalid data in password

 it('Invalid data in password',function()
 {
    cy.visit("http://sap.f2wmobi.de/")
    cy.get('#emailaddress').type('sap.admin@yopmail.com')
    cy.get('#password').type('abc123')
    cy.get("button[type='submit']").click()
    cy.get('form.MuiBox-root>p.MuiTypography-root:nth-child(6)').should('have.text',"Please enter valid password")
 })
       
 // Remember credentials
 
 it('Remember credentials', function()
 {
    cy.visit("http://sap.f2wmobi.de/")
    cy.get('#emailaddress').type('sap.admin@yopmail.com')
    cy.get('#password').type('Admin@123')
    cy.get("input[value='remember']").check()
    cy.get("button[type='submit']").click()
    //Check Logo
    cy.get('.MuiContainer-root > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .drawer-top > .css-old1by >  .MuiBox-root').should('be.visible')
    //Logout button
    cy.get('.MuiContainer-root > .MuiDrawer-root > .MuiPaper-root > .sidebar-full > :nth-child(7) > .MuiListItem-root > .MuiButtonBase-root').click()
    cy.get('#emailaddress').should('have.value','sap.admin@yopmail.com')
    cy.get('#password').should('have.value','Admin@123')
 })
})
 
