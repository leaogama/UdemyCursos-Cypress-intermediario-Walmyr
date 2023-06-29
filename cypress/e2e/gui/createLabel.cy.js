/// <reference types="cypress"/>



import { faker } from '@faker-js/faker'
const options = { env: { snapshotOnly: true } }
describe('Create Label', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    },
    label: {
      name: `label-${faker.datatype.uuid()}`,
      color: "#ffaabb"
    }
  }

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createProject(issue.project)
    cy.gui_createIssue(issue)
  })

  it('successfully', () => {
    cy.gui_createLabel(issue)

  })
// it('successfully', () => {
//   
// })

})
