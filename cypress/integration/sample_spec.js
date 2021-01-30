describe('My first Cypress Test',()=>{

    it('search a product',()=>{
        cy.visit('localhost:4200/search')
        cy.get('.buscador').type('ipad{enter}')
        cy.get('.detalle').first().click()
    
    })

})