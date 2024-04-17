describe("Template Test Cypress Real World App", () => {
  it("'Scenario 1", () => {
    const userRegister = {
      fisrtName: "João Victor",
      secondName: "Calegário",
    };
    cy.visit("http://localhost:3000");
    cy.get('[data-test="signup"]').click();
    cy.get("#firstName").type(userRegister.fisrtName);
  });
});
