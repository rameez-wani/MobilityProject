///<reference types="Cypress"/>
import MobilityObj from "../MobilityObjects/MobilityObj"

describe('Employee Screen', function () {
  const mobilityObject = new MobilityObj()
  //Create Employee
  //   it("Create employee in the list", function () 
  //  {

  //     cy.visit(Cypress.env('url'))
  //     mobilityObject.getLogin()
  //     mobilityObject.getCreateNewEmployee()
  //  })

  // //Create Budget
  //  it("Create Budget", function () 
  //  {
  //   cy.visit(Cypress.env('url'))
  //   mobilityObject.getLogin()
  //   mobilityObject.getCreateBudgetGroup()
  //   cy.get('.MuiDialogContent-root > .MuiBox-root > :nth-child(3)').click()
  //   cy.get('.MuiDialogActions-root > .MuiButton-outlined').click()
  //   cy.wait(5000)

  //   cy.get('.MuiGrid-spacing-xs-1 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('abcd100').invoke('val').should(value => {
  //     expect(Number.isInteger(+value), 'input should be an integer').to.eq(true)
  //   })

  //   //Start Month
  //   cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
  //   //select month
  //   cy.get('.MuiPickersCalendarHeader-label').click()
  //   //select year
  //   cy.get('.PrivatePickersYear-yearButton').contains('2025').click()

  //   //End Month
  //   cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
  //   //select month
  //   cy.get('.MuiPickersCalendarHeader-label').click()
  //   //select year
  //   cy.get('.PrivatePickersYear-yearButton').contains('2026').click()
  //   cy.get("button[type='submit']").should('have.text','Next').click()
  //   cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text','Budget group setting update successfully')

  //  })


  // Add Budget in employee
  it("Add Budget in employee", function () {
    cy.visit(Cypress.env('url'))
    mobilityObject.getLogin()
    mobilityObject.getCreateBudgetGroup()
    cy.get('.MuiDialogContent-root > .MuiBox-root > :nth-child(3)').click()
    cy.get('.MuiDialogActions-root > .MuiButton-outlined').click()
    cy.wait(5000)

    cy.get('.MuiGrid-spacing-xs-2 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('abcd100').invoke('val').should(value => {
      expect(Number.isInteger(+value), 'input should be an integer').to.eq(true)
    })

    //Start Month
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
    //select month
    cy.get('.MuiPickersCalendarHeader-label').click()
    //select year
    cy.get('.PrivatePickersYear-yearButton').contains('2025').click()

    //End Month
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
    //select month
    cy.get('.MuiPickersCalendarHeader-label').click()
    //select year
    cy.get('.PrivatePickersYear-yearButton').contains('2026').click()
    cy.get("button[type='submit']").should('have.text','Next').click()
    cy.wait(500)
    cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text','Budget group setting updated successfully')

    //cy.get('.MuiButton-contained').click()
    mobilityObject.getCreateNewEmployee()
    cy.get('.MuiDialogContent-root > .MuiInputBase-root > .MuiInputBase-input').type(mobilityObject.budgetGroupName)
    cy.wait(3000)
    cy.get('.MuiDialogContent-root > .MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.MuiDialogActions-root > .MuiButton-outlined').click()
    cy.wait(3000)
    cy.get("button[label='Submit']").should('have.text','Submit').click()
    cy.wait(1000)
    // bug in mssage - tejaswini
    cy.get('.Toastify__toast-body').should('have.text','Employee allocation update successfully')
   
  })

  // Search Employee

  //  it("Search Employee", function () 
  //  {
  //     cy.visit(Cypress.env('url'))
  //     mobilityObject.getLogin()
  //     mobilityObject.getCreateNewEmployee()
  //     cy.get('.MuiButton-contained').click()
  //     cy.get('p.MuiTypography-p.back-btn').click()
  //     cy.wait(2000)
  //     // cy.get('.MuiInputBase-input:nth-child(2)').type(mobilityObject.empFullName)
  //     // cy.wait(2000)
  //     // cy.get('.MuiDataGrid-cellContent').should('have.text',mobilityObject.empFullName)
  //     cy.get('.MuiInputBase-input:nth-child(2)').clear().type(mobilityObject.empcode)
  //     cy.get('[data-field="systemCode"] > .link').should('have.text',mobilityObject.empcode)
  //   })

})