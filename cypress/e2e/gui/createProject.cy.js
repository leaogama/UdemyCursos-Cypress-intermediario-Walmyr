/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomProduct = `projeto-${faker.commerce.product()}` // 'Computer'
const randomProductdescription = faker.commerce.productDescription() // 'Andy shoes are designed to keeping...'
describe('gui links para New Project', () => {

    beforeEach(() => {
        cy.login()
    });

    it('ct01 link bordas na area New Project no centro da homepage', () => {
        cy.get('.blank-state-row > [href="/projects/new"]').click()
    });
    it('ct02 link title New Project no centro da homepage', () => {
        cy.get('[href="/projects/new"] > .blank-state-body > .blank-state-title').click()
    });
    it('ct03 link text New Project no centro da homepage', () => {
        cy.get('[href="/projects/new"] > .blank-state-body > .blank-state-text').click()
    });
    it('ct04 link icon New Project no centro da homepage', () => {
        cy.get('[href="/projects/new"] > .blank-state-icon').click()
    });
    it('ct05 link menu superior icon New Project no centro da homepage', () => {

        cy.get('#js-onboarding-new-project-link').click()
        cy.get('.qa-global-new-project-link').click()
    });


});
describe('gui cadastro New Project', () => {

    beforeEach(() => {
        cy.login()
    });

    it.only('ct01 New Project private', () => {
        //cy.get('#js-onboarding-new-project-link').click()
        //cy.get('.qa-global-new-project-link').click()

        cy.gui_createProject(randomProduct, randomProductdescription) |

        cy.get('.home-panel-title').should('contain', randomProduct)
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${randomProduct.toLowerCase()}`)
        /*<input class="form-check-input" data-track-label="blank_project" data-track-event="activate_form_input" data-track-property="visibility_level_10" data-track-value=""  type="radio" value="10" name="project[visibility_level]" id="project_visibility_level_10"> */
    });


});