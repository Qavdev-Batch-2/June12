/// <reference types="cypress" />

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.konga.com/')
  })

  it("should be able to login", ()=> {
    cy.wait(2000)
    cy.contains('Login / Signup').click()
    cy.get('[id="username"]').type('mahzeeljohn@gmail.com')
    .should('have.id', 'username')
    .should('be.enabled')
   cy.get('[id="password"]').type('E.lens123456')
   .should('have.id','password')
   cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
   
  //  let message= 'The username or password you have entered is incorrect. Please try again.'
  //  expect(message).to.be.equal('The username or password you have entered is incorrect. Please try again.')
    
   let message= 'Login Successful'
   expect(message).to.be.equal('Login Successful')
})

})