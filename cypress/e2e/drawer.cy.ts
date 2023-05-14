describe("Drawer", () => {
  it("Check drawer menu burger button", () => {
    cy.visit(Cypress.env("localhost"));

    const openDrawerBtn =
      "#root > :nth-child(1) > :nth-child(3) > :nth-child(1)";
    const closeDrawerBtn = '[data-testid="drawer"] > .absolute';

    cy.get('[data-testid="drawer-overlay"]').should("have.class", "opacity-0");
    cy.get(openDrawerBtn).click();
    cy.get('[data-testid="drawer-overlay"]').should(
      "have.class",
      "opacity-100"
    );
    cy.get("body").should("have.css", "overflow");
    cy.get(closeDrawerBtn).click();
  });
});
