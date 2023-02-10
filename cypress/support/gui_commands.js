Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
) => {
    const login = () => {
        cy.visit('/')
        cy.get("[data-qa-selector='login_field']").type(user)
        cy.get("[data-qa-selector='password_field']").type(password, { log: false })
        cy.get("[data-qa-selector='sign_in_button']").click()
    }
    login()
})

Cypress.Commands.add('logout', () =>{
    cy.get('.qa-user-avatar').should('be.visible')
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
    cy.get('[data-qa-selector="sign_in_tab"]').should('be.visible')
})