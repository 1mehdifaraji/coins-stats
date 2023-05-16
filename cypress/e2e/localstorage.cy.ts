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
  });
});
