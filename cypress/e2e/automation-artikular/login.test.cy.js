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
    it('Should login with invalid password', () => {
        cy.visit('https://www.artikularklinik.com/')
        cy.url().should('include', 'artikular')
        cy.contains('Login').click()

        cy.url().should('include', 'login')

        cy.fixture('user').then(({ username, password_wrong }) => {
            cy.get('#username').clear().type(username);

            cy.get('#password').clear().type(password_wrong);

            cy.get('button[type="submit"]').click();

            cy.on('window:alert', (txt) => {
                cy.wait(3000)
                //Assertion
                expect(txt).to.contains("Password lama anda salah");
            })
        });
    });

    it('Should login with invalid username', () => {
        cy.visit('https://www.artikularklinik.com/')
        cy.url().should('include', 'artikular')
        cy.contains('Login').click()

        cy.url().should('include', 'login')

        cy.fixture('user').then(({ username_wrong, password }) => {
            cy.get('#username').clear().type(username_wrong);

            cy.get('#password').clear().type(password);

            cy.get('button[type="submit"]').click();
            cy.wait(4000)
            cy.on('window:alert', (txt) => {
                //Assertion
                expect(txt).to.contains("User not found");
            })
        });
    });
    it('Should Login with a blank username', () => {
        cy.visit('https://www.artikularklinik.com/')
        cy.url().should('include', 'artikular')
        cy.contains('Login').click()

        cy.url().should('include', 'login')

        cy.fixture('user').then(({ password }) => {
            cy.get('#username').clear()
            cy.get('#password').clear().type(password);

            cy.get('button[type="submit"]').click();
            cy.wait(3000)
            cy.on('window:alert', (txt) => {
                //Assertion
                expect(txt).to.contains("\"username\" is required");
            })
        });
    });
    it('Should Login with a blank password', () => {
        cy.visit('https://www.artikularklinik.com/')
        cy.url().should('include', 'artikular')
        cy.contains('Login').click()

        cy.url().should('include', 'login')

        cy.fixture('user').then(({ username }) => {
            cy.get('#username').clear().type(username);
            cy.get('#password').clear()
            cy.get('button[type="submit"]').click();
            cy.wait(3000)
            cy.on('window:alert', (txt) => {

                //Assertion
                expect(txt).to.contains("\"password\" is required");
            })
        });
    });
})