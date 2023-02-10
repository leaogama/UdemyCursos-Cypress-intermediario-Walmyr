

describe('Logout', () => {

  beforeEach(() => {
    cy.login()
    cy.visit('/')
  });

  it('successifully', () => {

    cy.logout()
    const uuu = (`${Cypress.config("baseUrl")}/users/sign_in`)
    console.log(uuu)
    cy.url().should('be.equal', `${Cypress.config("baseUrl")}/users/sign_in`)
  });

});