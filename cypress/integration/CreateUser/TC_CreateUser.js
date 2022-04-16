/// <reference types = "cypress" /> 


describe('Create New User', function(){
it('tempown test', function() {
    cy.visit('http://23.22.151.143/')
    cy.get('#inputEmail').type('ayeoyenikantemitayo@gmail.com')
cy.get('#inputPassword').type('Kaduna09.')
cy.get('.btn').click()
cy.get('.btn-group.ng-scope > .btn').click()
cy.get('[href="/settings/users/new"]').click()
cy.get('#exampleInputEmail1').type('Temitayo')
cy.get(':nth-child(2) > #exampleInputEmail2').type('Elizabeth')
cy.get(':nth-child(3) > #exampleInputEmail4').type('teshytemmy@gmail.com')
cy.get(':nth-child(4) > #exampleInputEmail4').type('08133610881')
cy.get(':nth-child(5) > #exampleInputEmail2').type('ikeja, Lagos')
cy.get(':nth-child(6) > #exampleInputEmail4').type('1234567890123445')
cy.get(':nth-child(7) > #exampleInputEmail4').type('12-Jan-95')
cy.get('#exampleFormControlSelect5').select('Female').should('have.value','string:female')
cy.get('.modal-footer > .btn-primary').click()
    }) 

})