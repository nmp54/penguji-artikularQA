/// <reference types="cypress" />

describe('API Testing: Login and Content Validation', () => {

    // Test untuk login menggunakan API
    it('Should successfully login by appending username and password in the URL', () => {
        cy.log('Starting login test...'); // Log untuk menandai awal pengujian login
        cy.loginViaAPI(); // Custom command untuk login via API (pastikan command sudah diatur di support/commands.js)
    });

    // Test untuk memvalidasi header Content-Type pada API response
    it('Should validate that the content-type is JSON', () => {
        cy.log('Sending GET request to validate Content-Type header...'); // Log untuk memulai validasi header
        cy.request({
            method: "GET",
            url: "https://arti.api.artikularklinik.com/api/master/settings/v1/part/ASSETS" // Endpoint untuk pengujian
        }).as("artikular"); // Alias untuk response request

        cy.get("@artikular") // Mengambil response menggunakan alias
            .its("headers").its("content-type") // Mengakses header Content-Type
            .should('include', 'application/json; charset=utf-8'); // Validasi bahwa header sesuai ekspektasi
    });

});
