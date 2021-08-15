/// <reference types="cypress" />

context("Navigation", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
    cy.get(".navbar-nav").contains("Commands").click();
    cy.get(".dropdown-menu").contains("Navigation").click();
  });

  it("cy.go() - go back or forward in the browser's history", () => {
    // https://on.cypress.io/go

    cy.location("pathname").should("include", "navigation");

    cy.go("back");
    cy.location("pathname").should("not.include", "navigation");

    cy.go("forward");
    cy.location("pathname").should("include", "navigation");

    // clicking back
    cy.go(-1);
    cy.location("pathname").should("not.include", "navigation");

    // clicking forward
    cy.go(1);
    cy.location("pathname").should("include", "navigation");
  });

  it("cy.reload() - reload the page", () => {
    // https://on.cypress.io/reload
    cy.reload();

    // reload the page without using the cache
    cy.reload(true);
  });

  it("cy.visit() - visit a remote url", () => {
    // https://on.cypress.io/visit

    // Visit any sub-domain of your current domain

    // Pass options to the visit
    cy.visit("https://example.cypress.io/commands/navigation", {
      timeout: 50000, // increase total time for the visit to resolve
      onBeforeLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === "object").to.be.true;
      },
      onLoad(contentWindow) {
        // contentWindow is the remote page's window object
        expect(typeof contentWindow === "object").to.be.true;
      },
    });
  });
});

context("Location", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/location");
  });

  it("cy.hash() - get the current URL hash", () => {
    // https://on.cypress.io/hash
    cy.hash().should("be.empty");
  });

  it("cy.location() - get window.location", () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq(
        "https://example.cypress.io/commands/location"
      );
      expect(location.host).to.eq("example.cypress.io");
      expect(location.hostname).to.eq("example.cypress.io");
      expect(location.origin).to.eq("https://example.cypress.io");
      expect(location.pathname).to.eq("/commands/location");
      expect(location.port).to.eq("");
      expect(location.protocol).to.eq("https:");
      expect(location.search).to.be.empty;
    });
  });

  it("cy.url() - get the current URL", () => {
    // https://on.cypress.io/url
    cy.url().should("eq", "https://example.cypress.io/commands/location");
  });
});
