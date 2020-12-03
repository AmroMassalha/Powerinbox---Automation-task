describe('GOOGLE logo test', () => {
    it('Validate Google logo appears', () => {
        cy.visit('https://www.youtube.com')
        cy.get('#logo-icon-container')
    });
});