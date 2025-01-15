/// <reference types="cypress" />

describe('Detail Service', () => {
    it('Detail service clinic', () => {
        //visit website
        cy.visit('https://www.artikularklinik.com/')
        cy.url().should('include', 'artikular')
        cy.wait(1000)

        //click navbar service
        cy.contains('Layanan Kami').click()
        cy.url().should('include', 'layanan')

        //click service to look detail product
        cy.contains('JOINT PAIN CENTER').click()
        cy.get('h3').should('contain.text', 'Joint Pain Center')
    });
})
