describe("Example to demo conditional testing in cypress", () => {
  beforeEach(() => {
    cy.visit("https://en.wikipedia.org/wiki/The_Beatles");
  });

  var paulBornDate = "";
  var johnBornDate = "";

  it("Vist the beatles", () => {
    cy.get("td")
      .should("have.class", "infobox-image")
      .get("div")
      .should("have.class", "infobox-caption")
      .contains("a", "Paul McCartney")
      .click();

    cy.get("div")
      .should("have.class", "mw-content-ltr")
      .get("div")
      .should("have.class", "mw-parser-output")
      .get("table")
      .should("have.class", "infobox")
      .get("tr:nth-child(3) td span:nth-child(1)")
      .first()
      .then(($text) => {
        paulBornDate = $text.text();
      });

    it("Vist back to the beatles", () => {
      cy.get("td")
        .should("have.class", "infobox-image")
        .get("div")
        .should("have.class", "infobox-caption")
        .contains("a", "John Lennon")
        .click();

      cy.get("div")
        .should("have.class", "mw-content-ltr")
        .get("div")
        .should("have.class", "mw-parser-output")
        .get("table")
        .should("have.class", "infobox")
        .get("tr:nth-child(3) td span:nth-child(1)")
        .first()
        .then(($text) => {
          johnBornDate = $text.text();
        });
    });
  });
  it("Doest John Born before Paul", () => {
    if (johnBornDate < paulBornDate) {
      cy.screenshot();
    } else {
      console.log("nothing");
    }
  });
});
