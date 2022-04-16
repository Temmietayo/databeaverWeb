/// <reference types = "cypress" /> 


describe ('Form Creation', function(){ 
    it('creating a form', function() {
        cy.visit('http://23.22.151.143/')
        cy.get('#inputEmail').type('ayeoyenikantemitayo@gmail.com')
        cy.get('#inputPassword').type('Kaduna09.')
        cy.get('.btn').click()
        cy.get('.btn-group.ng-scope > .btn').click()
        cy.get('.dropdown-menu > [href="/forms/create"]').click()
        cy.get('.sidebar-holder > :nh-child(2) > :nth-child(2) > .nav-link').click()
        cy.get('[ng-show="object.settings.hasMinMaxLength"] > .text-secondary > small').click({force: true})
        cy.get('[ng-show="showLengthEditor"] > .card-body > .row > :nth-child(1) > .form-control').type('5')
        cy.get('[ng-show="showLengthEditor"] > .card-body > .row > :nth-child(2) > .form-control').type('40')
        cy.get('[ng-show="showLengthEditor"] > .card-body > .btn-primary').click()
        cy.get('[ng-show="object.settings.hasMemoryField"] > .text-secondary').click({force: true})
        cy.get('[ng-show="object.settings.hasRequired"] > .text-secondary > small').click({force: true})
        cy.get(':nth-child(13) > .form-control').clear().type('First Name')
        cy.get(':nth-child(2) > :nth-child(3) > .nav-link').click()
        cy.get('[ng-show="object.settings.hasMinMaxLength"] > .text-secondary > small').click({force: true})
        cy.get('[ng-show="showLengthEditor"] > .card-body > .row > :nth-child(1) > .form-control').type('5')
        cy.get('[ng-show="showLengthEditor"] > .card-body > .row > :nth-child(2) > .form-control').type('40')
        cy.get('[ng-show="showLengthEditor"] > .card-body > .btn-primary').click()
        cy.get('[ng-show="object.settings.hasHintText"] > .text-secondary > small').click({force: true})
        cy.get('[ng-show="object.settings.hasHintText"] > .card > .card-body > .row > .col > .form-control').type('Type Item Description')
        cy.get('[ng-show="object.settings.hasHintText"] > .card > .card-body > .btn-primary').click()
        cy.get(':nth-child(13) > .form-control').clear().type('Description')
        cy.get('[ng-show="object.settings.hasRequired"] > .text-secondary > small').click({force: true})
        cy.get(':nth-child(4) > :nth-child(1) > .nav-link').click()
        cy.get('[ng-show="object.settings.hasRequired"] > .text-secondary > small').click({force: true})
        cy.get(':nth-child(13) > .form-control').clear().type('Phone Number')
        cy.get(':nth-child(4) > .form-control').type('Order form')
        cy.get('.float-right > .btn').click()

    }) 

})