///<reference types="Cypress"/>
import MobilityObj from "../MobilityObjects/MobilityObj"

describe('Categories Screen', function () {

   const mobilityObject = new MobilityObj()

// Create multiple categories in one go

   it("Create multiple categories in one go", function () 
   {

      cy.visit(Cypress.env('url'))
      mobilityObject.getLogin()
      mobilityObject.getMultipleCreateCategories()

   })


// Search Category

   it("Search Category", function () 
   {
      cy.visit(Cypress.env('url'))
      mobilityObject.getLogin()
      mobilityObject.getSingleCreateCategory()

      cy.get('.MuiInputBase-input:nth-child(2)').type(mobilityObject.catname)
      cy.wait(2000)
      cy.get('.MuiDataGrid-cellContent').should('have.text',mobilityObject.catname)
      cy.get('.MuiInputBase-input:nth-child(2)').clear().type(mobilityObject.catcode)
      cy.get('a.link').should('have.text',mobilityObject.catcode)

   })

// Update Category

   it("Update Category", function () {
      cy.visit(Cypress.env('url'))
      mobilityObject.getLogin()
      mobilityObject.getSingleCreateCategory()
      mobilityObject.getUpdateCategory()
      
   })


// Update status from Category list page

   it("Update status from Category list page", function () {
    cy.visit(Cypress.env('url'))
      mobilityObject.getLogin()
      mobilityObject.getSingleCreateCategory()
      cy.get('.MuiInputBase-input:nth-child(2)').type(mobilityObject.catcode)
      cy.wait(5000)
      cy.get('a.link').should('have.text',mobilityObject.catcode)
      cy.get('.MuiDataGrid-cellCheckbox > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
      cy.get('span.inactive').should('have.text','Inactive')
      cy.get('.css-1up2o6-MuiGrid-root > :nth-child(1) > .MuiButtonBase-root').click()
      cy.get('.MuiDialogActions-root > .MuiButton-outlined').click()
      cy.get('.Toastify__toast-body').should('have.text','Status updated successfully')
      cy.get('span.inactive').should('have.text','Inactive')

   })
})