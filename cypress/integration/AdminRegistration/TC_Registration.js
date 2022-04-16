/// <reference types = "cypress" /> 

describe ('Login Authentication test', function(){
    it('registration positive', function() {
        cy.visit('http://23.22.151.143/')
        cy.get('a').click()
        cy.get('#exampleInputEmail1').type('Temitayo')
        cy.get('#exampleInputEmail2').type('Ayeoyenikan')
        cy.get(':nth-child(3) > #exampleInputEmail4').type('teshytemmy@gmail.com')
        cy.get(':nth-child(4) > #exampleInputEmail4').type('09038550639')
        cy.get(':nth-child(5) > #exampleInputEmail4').type('Kaduna09')
        cy.get('.btn').click()
        
        }) 
    
})