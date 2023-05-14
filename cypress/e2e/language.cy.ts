describe("Multilanguage", () => {
  it("Check all 4 languages", () => {
    cy.visit(Cypress.env("localhost"));

    const openDrawerBtn =
      "#root > :nth-child(1) > :nth-child(3) > :nth-child(1)";
    const closeDrawerBtn = '[data-testid="drawer"] > .absolute';

    cy.get(openDrawerBtn).click();
    cy.get(":nth-child(2) > .flex > :nth-child(2)").click();
    cy.get('[data-testid="drawer"] > :nth-child(2) > :nth-child(1)').should(
      "contain.text",
      "زبان"
    );
    cy.get(":nth-child(2) > .flex > :nth-child(3)").click();
    cy.get('[data-testid="drawer"] > :nth-child(2) > :nth-child(1)').should(
      "contain.text",
      "sprache"
    );
    cy.get(":nth-child(2) > .flex > :nth-child(4)").click();
    cy.get('[data-testid="drawer"] > :nth-child(2) > :nth-child(1)').should(
      "contain.text",
      "لغة"
    );
    cy.get(
      '[data-testid="drawer"] > :nth-child(2) > .flex > :nth-child(1)'
    ).click();
    cy.get('[data-testid="drawer"] > :nth-child(2) > :nth-child(1)').should(
      "contain.text",
      "language"
    );
    cy.get(closeDrawerBtn).click();
  });
});
