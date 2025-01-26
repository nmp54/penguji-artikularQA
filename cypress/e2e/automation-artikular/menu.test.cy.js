/// <reference types="cypress" />

describe('Access Profile,Reservasi,and logout', () => {
    it('Should successfully log in with credentials', () => {
        //melakukan login terlebih dahulu
        cy.visit('https://www.artikularklinik.com/login')
        cy.url().should('include', 'login')

        cy.fixture('user').then(({ username, password }) => {
            cy.get('#username').clear().type(username);

            cy.get('#password').clear().type(password);

            cy.get('button[type="submit"]').click();
        });
        //access profile page
        cy.get('#menu-button').click()
        cy.contains('Profile').click()
        cy.contains('Edit Profil').should('be.visible')
        //access Reservasi
        cy.get('#menu-button').click()
        cy.get('a[href="/profile/reservasi"]').click()
        cy.contains('Riwayat Reservasi').should('be.visible')
        //logout account
        cy.get('#menu-button').click()
        cy.contains('Logout').click()
        cy.contains('Keluar').click()
    });
});