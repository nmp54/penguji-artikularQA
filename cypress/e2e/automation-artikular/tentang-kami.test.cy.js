/// <reference types="cypress" />

describe('Access Tentang Kami in Web', () => {

    // Test untuk mengakses halaman "Tentang Kami"
    it('Should successfully go to the About page', () => {
        // Mengunjungi website
        cy.visit('https://www.artikularklinik.com/')

        // Memverifikasi bahwa URL mengandung kata 'artikular'
        cy.url().should('include', 'artikular')

        // Mengklik link "Tentang Kami"
        cy.contains('Tentang Kami').click({ multiple: true })

        // Mengklik link yang mengarah ke halaman tentang kami
        cy.get('a[href="/tentang"]').click({ force: true, multiple: true })
        cy.wait(3000)

        // Memastikan elemen "Visi dan Misi Kami" terlihat di halaman
        cy.contains('Visi dan Misi Kami').should('be.visible')
    });

    // Test untuk mengakses halaman Galeri
    it('Should successfully go to the Gallery page', () => {
        // Mengunjungi website
        cy.visit('https://www.artikularklinik.com/')

        // Memverifikasi bahwa URL mengandung kata 'artikular'
        cy.url().should('include', 'artikular')

        // Mengklik link "Tentang Kami"
        cy.contains('Tentang Kami').click({ multiple: true })

        // Mengklik link yang mengarah ke halaman galeri
        cy.get('a[href="/galleries"]').click({ force: true, multiple: true })
        cy.wait(3000)

        // Memastikan elemen "Soft Opening Ceremony" terlihat di halaman
        cy.contains('Soft Opening Ceremony').should('be.visible')
    });

    // Test untuk mengakses halaman Artikel
    it('Should successfully go to the Artikel page', () => {
        // Mengunjungi website
        cy.visit('https://www.artikularklinik.com/')

        // Memverifikasi bahwa URL mengandung kata 'artikular'
        cy.url().should('include', 'artikular')

        // Mengklik link "Tentang Kami"
        cy.contains('Tentang Kami').click({ multiple: true })

        // Mengklik link yang mengarah ke halaman artikel
        cy.get('a[href="/artikel"]').click({ force: true, multiple: true })
        cy.wait(3000)

        // Memastikan elemen "Explore Our Articles" terlihat di halaman
        cy.contains('Explore Our Articles').should('be.visible')
    });
});
