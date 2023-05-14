describe("Favourite coins", () => {
  it("Toggle favourite coins", () => {
    cy.visit(Cypress.env("localhost"));
    cy.wait(15000);

    cy.get(
      ":nth-child(8) > :nth-child(1) > .w-60 > :nth-child(1) > :nth-child(1)"
    ).click();
    cy.get('[data-testid="switch"]').click();
    cy.wait(300);
    cy.get(
      ".py-3.flex > :nth-child(1) > .w-60 > .space-x-2 > :nth-child(2)"
    ).should("contain.text", "Tether");
    cy.get('[data-testid="switch"]').click();
    cy.get(
      ":nth-child(6) > :nth-child(1) > .w-60 > .space-x-2 > :nth-child(2)"
    ).should("contain.text", "Bitcoin");
  });
});