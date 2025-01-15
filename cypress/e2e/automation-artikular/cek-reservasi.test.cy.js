/// <reference types="cypress" />

describe('Cek reservasi ', () => {
    it('Cek Reservasi with email', () => {

        //visit to website
        cy.visit('https://www.artikularklinik.com/')
        cy.url().should('include', 'artikular')
        cy.wait(1000)

        //click navar cek reservasi
        cy.contains('Cek Reservasi').click()
        cy.url().should('include', 'cek-reservasi')

        //searching to cek reservasi with email valid
        cy.fixture('user').then(({ email_reservasi }) => {
            cy.get('#email').clear().type(email_reservasi)
            cy.wait(5000)
            cy.get('button.bg-teal-500').contains('Cari').click({ multiple: true })
            cy.wait(10000)
            cy.contains('Detail Reservasi').should('be.visible')
        });
        //searching to cek reservasi with email invalid
        cy.get('#email').clear().type('mulyaputri@gmail.com')
        cy.wait(5000)
        cy.get('button.bg-teal-500').contains('Cari').click({ multiple: true })
        cy.wait(4000)
        cy.contains('Data tidak ditemukan').should('be.visible')
    })
})