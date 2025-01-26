/// <reference types="cypress" />

describe('API Testing: Login Functionality', () => {

    // Test untuk login berhasil menggunakan kredensial yang benar melalui API
    it('Should successfully login by appending correct username and password in the request body', () => {
        cy.log('Starting login test...'); // Log untuk menandai awal pengujian login
        cy.loginViaAPI(); // Custom command untuk login via API (pastikan command sudah diatur di support/commands.js)
    });

    // Test untuk login gagal dengan password yang salah
    it('Should fail login with incorrect password', () => {
        cy.request({
            method: 'POST',
            failOnStatusCode: false,
            url: 'https://arti.api.artikularklinik.com/api/user/v1/login', // Ganti dengan endpoint API login Anda
            body: {
                username: 'mulyaputri_',
                password: 'wrongpassword',
            },
        }).then((response) => {
            // Verifikasi bahwa status kode yang diterima adalah 422
            expect(response.status).to.eq(422);

            // Verifikasi pesan error yang sesuai
            expect(response.body.error.message).to.eq('Password lama anda salah');
        });
    });
});
