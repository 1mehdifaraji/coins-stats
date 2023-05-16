describe("Favourite coins", () => {
  it("Toggle favourite coins", () => {
    cy.visit("/");
    cy.wait(10000);

    cy.get(
      ":nth-child(3) > :nth-child(1) > .w-60 > :nth-child(1) > :nth-child(1)"
    ).click();
    cy.get('[data-testid="switch"]').click();
    cy.wait(300);
    cy.get(
      ".py-3.flex > :nth-child(1) > .w-60 > .space-x-2 > :nth-child(2)"
    ).should("contain.text", "Tether");
    cy.get('[data-testid="switch"]').click();
    cy.get(
      ":nth-child(1) > :nth-child(1) > .w-60 > .space-x-2 > :nth-child(2)"
    ).should("contain.text", "Bitcoin");
  });
});
