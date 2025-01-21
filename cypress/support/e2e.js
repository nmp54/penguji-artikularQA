// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
Cypress.Commands.add('loginViaAPI', () => {
    cy.request({
        method: 'POST',
        url: 'https://arti.api.artikularklinik.com/api/user/v1/login', // Ganti dengan endpoint API login Anda
        body: {
            username: 'mulyaputri_',
            password: 'Nmpmcm54',
        },
    }).then((response) => {
        expect(response.status).to.eq(200);
        window.localStorage.setItem('token', response.body.token);
        expect(response.body.name).to.eq('Nur');
    });
});


// Alternatively you can use CommonJS syntax:
// require('./commands')