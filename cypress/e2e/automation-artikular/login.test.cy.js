/// <reference types="cypress" />

describe('Visit to Website', () => {
    it('Should login with kredensial', () => {
        cy.visit('https://www.artikularklinik.com/')
        cy.url().should('include', 'artikular')
        cy.contains('Login').click()

        cy.url().should('include', 'login')

        cy.fixture('user').then(({ username, password }) => {
            cy.get('#username').clear().type(username);

            cy.get('#password').clear().type(password);

            cy.get('button[type="submit"]').click();
        });
    });
});
