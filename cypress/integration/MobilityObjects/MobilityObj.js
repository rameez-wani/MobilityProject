class MobilityObj {
    catname = "";
    catcode = "";
    updatedcatcode = "";
    updatedcatname = "";
    empcode = '';
    empFN = '';
    empLN = '';
    FullName = '';
    budgetGroupName='';
  
    userID_Alpha_Numeric() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  
    phone_number() {
      var text = "";
      var possible = "0123456789";
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  
    makeEmail() {
      var strValues = "abcdefg12345";
      var strEmail = "";
      var strTmp;
      for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
      }
      strTmp = "";
      strEmail = strEmail + "@";
      for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
      }
      strEmail = strEmail + ".com"
      return strEmail;
    }
  
    zipcode() {
      var text = "";
      var possible = "0123456789";
      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
    getLogin() {
  
      cy.get('#emailaddress').type('sap.admin@yopmail.com')
      cy.get('#password').type('Admin@123')
      return cy.get("button[type='submit']").click()
    }
    getSingleCreateCategory() {
  
      {
  
        //Master screen
        cy.get('.MuiContainer-root > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .sidebar > .menuItem-16 > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
        //Category screen
        cy.get(':nth-child(5) > .MuiPaper-elevation16 > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
        //Add category
        cy.get('.MuiGrid-root:nth-child(3)').click()
        this.catcode = this.userID_Alpha_Numeric();
        cy.get('#categorycode').type(this.catcode)
        this.catname = this.userID_Alpha_Numeric();
        cy.get('#categoryname').type(this.catname)
        cy.get("input[type='radio']").eq(1).click();
        cy.get('#mui-component-select-currency').click()
        cy.get('[data-value="1"]').click()
        cy.get('#status').click()
        cy.get('[data-value="Inactive"]').click()
        // checking the validation of entering alphanumeric data
        // cy.get('.MuiGrid-grid-xs-4 > .MuiInputBase-root > .MuiInputBase-input').type('abcd100').invoke('val').should(value => {
        //   expect(Number.isInteger(+value), 'input should be an integer').to.eq(true)
        // })
        cy.get('.MuiGrid-grid-xs-4 > .MuiInputBase-root > .MuiInputBase-input').type('22')
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
        cy.get('.MuiMonthPicker-root > :nth-child(1)').click()
        cy.get(':nth-child(2) > .PrivatePickersYear-yearButton').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
        cy.get('.MuiMonthPicker-root > :nth-child(8)').click()
        cy.get(':nth-child(2) > .PrivatePickersYear-yearButton').click()
        cy.get('button[type="submit"]').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Category added successfully')
        cy.wait(5000)
  
      }
  
  
    }
  
    getMultipleCreateCategories() {
  
      //Master screen
      cy.get('.MuiContainer-root > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .sidebar > .menuItem-16 > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
      //Category screen
      cy.get(':nth-child(5) > .MuiPaper-elevation16 > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  
      for (var i = 0; i < 3; i++) {
        //Add category
        cy.get('.MuiGrid-root:nth-child(3)').click()
        cy.get('#categorycode').type(this.userID_Alpha_Numeric())
        cy.get('#categoryname').type(this.userID_Alpha_Numeric())
        cy.get("input[type='radio']").eq(1).click();
        cy.get('#mui-component-select-currency').click()
        cy.get('[data-value="1"]').click()
        cy.get('#status').click()
        cy.get('[data-value="Inactive"]').click()
        // checking the validation of entering alphanumeric data
        // cy.get('.MuiGrid-grid-xs-4 > .MuiInputBase-root > .MuiInputBase-input').type('abcd100').invoke('val').should(value => {
        //   expect(Number.isInteger(+value), 'input should be an integer').to.eq(true)
        // })
        cy.get('.MuiGrid-grid-xs-4 > .MuiInputBase-root > .MuiInputBase-input').type('22')
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
        cy.get('.MuiMonthPicker-root > :nth-child(1)').click()
        cy.get(':nth-child(2) > .PrivatePickersYear-yearButton').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
        cy.get('.MuiMonthPicker-root > :nth-child(8)').click()
        cy.get(':nth-child(2) > .PrivatePickersYear-yearButton').click()
        cy.get('button[type="submit"]').click()
        cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Category added successfully')
        cy.wait(5000)
      }
  
    }
    getStartEndMonth() {
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
      cy.get('.MuiMonthPicker-root > :nth-child(1)').click()
      cy.get(':nth-child(2) > .PrivatePickersYear-yearButton').click()
      cy.wait(2000)
      cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
      cy.get('.MuiMonthPicker-root > :nth-child(8)').click()
      cy.get(':nth-child(2) > .PrivatePickersYear-yearButton').click()
      return
    }
  
  
    getUpdateCategory() {
      this.updatedcatcode = this.userID_Alpha_Numeric();
      this.updatedcatname = this.userID_Alpha_Numeric();
      cy.get('.MuiInputBase-input:nth-child(2)').clear().type(this.catcode)
      cy.get('a.link').should('have.text', this.catcode)
      cy.get('a.link').click()
      cy.get('#categorycode').clear().type(this.updatedcatcode)
      cy.get('#categoryname').clear().type(this.updatedcatname)
      cy.get("input[type='radio']").eq(0).click()
      cy.get("input[name='currency']").should('be.disabled')
      cy.get('#status').click()
      cy.get('[data-value="Active"]').click()
      // checking the validation of entering alphanumeric data
        // cy.get('.MuiGrid-grid-xs-4 > .MuiInputBase-root > .MuiInputBase-input').type('abcd100').invoke('val').should(value => {
        //   expect(Number.isInteger(+value), 'input should be an integer').to.eq(true)
        // })
        cy.get('.MuiGrid-grid-xs-4 > .MuiInputBase-root > .MuiInputBase-input').type('22')
      cy.wait(1000)
      cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
      cy.get('.MuiMonthPicker-root > :nth-child(1)').click()
      cy.get(':nth-child(3) > .PrivatePickersYear-yearButton').click()
      cy.wait(2000)
      cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
      cy.get('.MuiMonthPicker-root > :nth-child(10)').click()
      cy.get(':nth-child(3) > .PrivatePickersYear-yearButton').click()
  
      cy.get('button[type="submit"]').click()
      cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Category updated successfully')
      cy.wait(5000)
      cy.get('.MuiInputBase-input:nth-child(2)').type(this.updatedcatcode)
      cy.get('a.link').should('have.text', this.updatedcatcode)
      return
  
    }
  
    getCreateNewEmployee() {
      // User management 
      cy.get('.MuiContainer-root > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .sidebar > .menuItem-3 > .MuiButtonBase-root').click()
      //Employee Screen
      cy.get(':nth-child(5) > .MuiPaper-elevation16 > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > .MuiListItem-root > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
      cy.get('.MuiGrid-root:nth-child(4)').click()
      this.empcode = this.userID_Alpha_Numeric()
      this.empFN = this.userID_Alpha_Numeric()
      this.empLN = this.userID_Alpha_Numeric()
      this.FullName = (this.empFN + ' ' + this.empLN)
      cy.get('#employeecode').type(this.empcode)
      cy.get('#employeefirstname').type(this.empFN)
      cy.get('#employeelastname').type(this.empLN)
      cy.get('.flag-dropdown').click()
      cy.get("input[type='search']").type('Ind')
      cy.wait(2000)
      cy.get(".country-name").each(($e1, index, $list) => {
        if ($e1.text() === 'India') {
          cy.wrap($e1).click(index)
        }
      })
      const phonenum = this.phone_number()
      cy.get("input[type='tel']:nth-child(2)").type(phonenum)
      const email = this.makeEmail()
      const streetAdd = this.userID_Alpha_Numeric()
      cy.get('#employeeemail').type(email)
      cy.get('#streetaddress1').type(streetAdd)
      cy.get("input[value='Germany']").should('have.value', 'Germany')
      cy.get(':nth-child(4) > .MuiBox-root > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root > .MuiAutocomplete-endAdornment > .MuiButtonBase-root > [data-testid="ArrowDropDownIcon"] > path').click()
      cy.get('.MuiAutocomplete-option:nth-child(3)').click()
      cy.wait(2000)
      const zcode = this.zipcode()
      cy.get('#zipcode').type(zcode)
      cy.get("svg[data-testid='CalendarIcon']").click()
      //select month
      cy.get('.MuiPickersCalendarHeader-label').click()
      //select year
      cy.get('.PrivatePickersYear-yearButton').contains('2015').click()
      //select date
      cy.get('.MuiButtonBase-root.MuiPickersDay-root').contains('28').click()
      cy.get("input[value='TENANT_OPERATOR']").click()
      cy.get('#tags-filled').type("Tag1{enter}Tag2{enter}")
      // const Department=userID_Alpha_Numeric()
      // cy.get('#free-solo-with-text-demo').type(Department)
      // cy.wait(3000)
      // cy.get(('#free-solo-with-text-demo')).type("{downArrow},{enter}")
      cy.get("button[type='submit']").should('have.text', 'Save & Next').click()
      cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'User added successfully')
  
    }
  
  
    getCreateBudgetGroup() {
  
      //Master screen
      cy.get('.MuiContainer-root > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .sidebar > .menuItem-16 > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
      //Budget Group
      cy.get(':nth-child(5) > .MuiPaper-elevation16 > .MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
      cy.get('.MuiGrid-root:nth-child(3)').should('have.text', 'Add New').click()
      const Budgetcode = this.userID_Alpha_Numeric()
      cy.get('#code').type(Budgetcode)
      this.budgetGroupName = this.userID_Alpha_Numeric()
  
      cy.get('#budgetgroupname').type(this.budgetGroupName)
      cy.get('#mui-component-select-currency').click()
      cy.get('[data-value="1"]').click()
      cy.get("button[type='submit']").should('have.text', 'Next').click()
  
      cy.get('.Toastify__toast-body > :nth-child(2)').should('have.text', 'Budget group added successfully')
    }
  
  }
  
  export default MobilityObj;