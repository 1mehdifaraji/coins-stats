describe("Wallet addresses", () => {
  it("Add remove wallet addresses", () => {
    cy.visit("/");

    const openDrawerBtn =
      "#root > :nth-child(1) > :nth-child(3) > :nth-child(1)";
    const closeDrawerBtn = '[data-testid="drawer"] > .absolute';

    cy.get(openDrawerBtn).click();
    cy.get('[data-testid="drawer"] > :nth-child(1)').should(
      "contain.text",
      "no addresses found"
    );

    // Add wallet address
    cy.get(".flex > .text-blue-400").click();
    cy.get('[data-testid="modal"] > .px-3 > :nth-child(1)').type(
      "Test wallet address title"
    );
    cy.get('[data-testid="modal"] > .px-3 > :nth-child(2)').type(
      "Test wallet address desc"
    );
    cy.get('[data-testid="modal"] > .px-3 > :nth-child(3)').click();
    cy.get(
      '[data-testid="drawer"] > :nth-child(1) > .flex > :nth-child(2)'
    ).should("contain.text", "(1)");
    cy.get('[data-testid="drawer"] > :nth-child(2)').should(
      "contain.text",
      "Test wallet address Test wallet address desc"
    );

    // Delete wallet address
    cy.get(".items-start > .flex > :nth-child(2)").click();
    cy.get(
      '[data-testid="drawer"] > :nth-child(1) > .flex > [data-testid="text"]'
    ).should("contain.text", "wallet addresses");
    cy.get('[data-testid="drawer"] > :nth-child(1)').should(
      "contain.text",
      "no addresses found"
    );

    cy.get(closeDrawerBtn).click();
  });
});
