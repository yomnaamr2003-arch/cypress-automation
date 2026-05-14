describe('login test', () =>{
    it('login test', ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.username().type('standard_user')
        cy.password().type('secret_sauce')

    })
})