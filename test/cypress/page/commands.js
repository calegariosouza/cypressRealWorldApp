Cypress.Commands.add('waitLoading', () => cy.get('#loading', { timeout: 150000 }).should('not.exist'));
