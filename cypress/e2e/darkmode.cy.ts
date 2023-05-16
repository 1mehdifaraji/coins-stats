describe("Localstorage", () => {
  it("Check localstorage initial saved state", () => {
    cy.visit("/");

    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        "http://localhost:3000": {
          darkmode: "false",
          favCoins: "[]",
          lang: '"en"',
          walletAddresses: "[]",
        },
      });
    });
    cy.get("html").should("not.have.class", "dark");
    cy.get("#root > :nth-child(1) > :nth-child(3) > :nth-child(2)").click();
    cy.get("html").should("have.class", "dark");
    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        "http://localhost:3000": {
          darkmode: "true",
          favCoins: "[]",
          lang: '"en"',
          walletAddresses: "[]",
        },
      });
    });
    cy.get("#root > :nth-child(1) > :nth-child(3) > :nth-child(2)").click();
    cy.get("html").should("not.have.class", "dark");
    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        "http://localhost:3000": {
          darkmode: "false",
          favCoins: "[]",
          lang: '"en"',
          walletAddresses: "[]",
        },
      });
    });
  });
});
