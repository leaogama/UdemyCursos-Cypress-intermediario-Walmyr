Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
    { cacheSession = true } = {},
  ) => {
    const login = () => {
      cy.visit('/users/sign_in')
  
      cy.get("[data-qa-selector='login_field']").type(user)
      cy.get("[data-qa-selector='password_field']").type(password, { log: false })
      cy.get("[data-qa-selector='sign_in_button']").click()
    }
  
    const options = {
      cacheAcrossSpecs: true,
    }
  
    if (cacheSession) {
      cy.session(user, login, options)
    } else {
      login()
    }
  })

Cypress.Commands.add('logout', () => {
    cy.get('.qa-user-avatar').should('be.visible')
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
    cy.get('[data-qa-selector="sign_in_tab"]').should('be.visible')
})


Cypress.Commands.add('gui_createProject', (product, description) => {
    cy.visit('/projects/new')
    cy.get('#blank-project-name > .project-name > #project_name').type(product)
    cy.get('#project_description').type(description)
    cy.get('[data-qa-selector="private_radio"]').should('be.visible').first().check()
    cy.get('#project_initialize_with_readme').should('be.visible').check()
    cy.get('#blank-project-pane > #new_project > .btn-success').click()
})