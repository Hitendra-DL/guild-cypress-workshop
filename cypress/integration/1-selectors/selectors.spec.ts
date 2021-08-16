describe("Selectors", () => {
  it("should be able to select the various HTML elements", () => {
    cy.visit("cypress/integration/1-selectors/index.html");

    /* 
    Get the h1 element
    */
    cy.get("").should("have.length", 1);

    /* 
    Get the <input> element by its ID of "input"
    */
    cy.get("").should("have.length", 1);

    /* 
    Get the <h2> element by within the <section id="about"> element
    */
    cy.get("").should("have.length", 1);

    /* 
    Get the <p> elements with a class name of "about"
    */
    cy.get("").should("have.length", 3);

    /* 
    Get both the <h1> elements and the <h2> elements
    */
    cy.get("").should("have.length", 3);

    /* BONUS */

    /*
    Get the last <p> with a class of "about"
    */
    cy.get("").should("have.class", "is-last");

    /*
    Get the empty <section>
    */
    cy.get("").should("have.id", "empty-section");

    /*
    Get the <a> element that is not a child of <nav>
    */
    cy.get("").should("have.length", 1);
  });
});
