/// <reference types="cypress" />

describe('Validate the response body to see a list of service data', () => {
    it('Should successfully to see a list of service ', () => {
        cy.log('Sending GET request to validate response body..')
        cy.request({
            method: "GET",
            url: "https://arti.api.artikularklinik.com/api/master/services/v1"
        }).then((response) => {
            expect(response.body.success).to.eq(true);
            expect(response.body.data[0].name).to.eq('JOINT PAIN CENTER');//data berada di index pertama
            expect(response.body.data[5].name).to.eq('ORTHOPAEDIC CARE CENTER');//data berada di index pertama

        });
    });
})
