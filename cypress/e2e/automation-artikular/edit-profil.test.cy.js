/// <reference types="cypress" />

describe('Visit to Website', () => {
    it('Should login and fill the biodata', () => {
        // Kunjungi website dan login
        cy.visit('https://www.artikularklinik.com/');
        cy.contains('Login').click();
        cy.url().should('include', 'login');

        cy.fixture('user').then(({ username, password }) => {
            cy.get('#username').clear().type(username);
            cy.get('#password').clear().type(password);
            cy.get('button[type="submit"]').click();
            cy.url().should('not.include', 'login');
        });

        // Isi biodata setelah login
        cy.contains('Edit Profil').click();
        cy.get('#name').clear().type('Nur');//memasukkan nama
        cy.get('input[type="date"]')
            .type('2000-12-12') // Format YYYY-MM-DD
            .should('have.value', '2000-12-12'); // Pastikan nilainya sudah benar
        cy.get('#phone_number').clear().type("0812345678")//memasukkan nomor telepon
        cy.get('#female').click()//memilih jenis kelamin 
        cy.get('#address').clear().type("jl.mangga")

        cy.contains('Simpan').click()
        cy.get('p').should('contain.text', 'Data berhasil diubah')
    });
});
