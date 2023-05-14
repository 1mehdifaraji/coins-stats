describe("Search input", () => {
  it("Filter coins with input text", () => {
    cy.visit(Cypress.env("localhost"));

    cy.wait(15000);

    cy.get("input").type("Bitcoin");
    cy.get(
      ":nth-child(6) > :nth-child(1) > .w-60 > .space-x-2 > :nth-child(2)"
    ).should("have.text", "Bitcoin");
    cy.get("input").clear();
    cy.get("input").type("bnb");
    cy.get(
      ":nth-child(6) > :nth-child(1) > .w-60 > .space-x-2 > :nth-child(2)"
    ).should("have.text", "BNB");
    cy.get("input").clear();
  });
});
