/// <reference types="cypress" />

describe('Validate Response Body and Headers', () => {
    // Test untuk memvalidasi body pada response
    it('Validates the success is true and the name in the data is logo', () => {
        cy.log('Sending GET request to validate data body...'); // Log untuk menandai awal validasi header Content-Type

        // Mengirimkan request GET untuk endpoint yang ditentukan
        cy.request({
            method: "GET",
            url: "https://arti.api.artikularklinik.com/api/master/settings/v1/part/ASSETS" // Endpoint untuk pengujian header
        }).then((response) => {
            expect(response.body.success).to.eq(true);
            expect(response.body.data[0].name).to.eq('logo');//data berada di index pertama 
        });
    });        // Test untuk memvalidasi header Content-Type pada response
    it('Should validate that the Content-Type header is JSON', () => {
        cy.log('Sending GET request to validate Content-Type header...'); // Log untuk menandai awal validasi header Content-Type

        // Mengirimkan request GET untuk endpoint yang ditentukan
        cy.request({
            method: "GET",
            url: "https://arti.api.artikularklinik.com/api/master/settings/v1/part/ASSETS" // Endpoint untuk pengujian header
        }).as("artikular"); // Memberikan alias "artikular" pada response request

        // Mengambil response menggunakan alias dan memverifikasi header Content-Type
        cy.get("@artikular")
            .its("headers") // Mengakses bagian headers dari response
            .its("content-type") // Mengakses header Content-Type
            .should('include', 'application/json; charset=utf-8'); // Memastikan header Content-Type sesuai dengan ekspektasi
    });
});
