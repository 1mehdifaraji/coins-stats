describe("Modal", () => {
  it("Open close onchange modal", () => {
    cy.visit(Cypress.env("localhost"));

    const openDrawerBtn =
      "#root > :nth-child(1) > :nth-child(3) > :nth-child(1)";
    const closeDrawerBtn = '[data-testid="drawer"] > .absolute';

    cy.get(openDrawerBtn).click();
    cy.get(".flex > .text-blue-400").click();
    cy.get('[data-testid="modal"]').should("not.be.undefined");
    cy.get('[data-testid="modal"] > .p-1').click();
    cy.get(closeDrawerBtn).click();
  });
});
