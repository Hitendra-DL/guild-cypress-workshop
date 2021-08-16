describe("Actions and Assertions", () => {
  it("should be able to interact with the various HTML elements", () => {
    cy.visit("cypress/integration/2-actions-and-assertions/index.html");

    /* 
    Get the `<input type="text" />, click it, and type your name
    */
    cy.get("") // change this
      .click()
      .type("") // change this
      .invoke("val")
      .should("be.ok");

    /* 
    Get the `<input type="number" />, click it, and type a number
    */
    cy.get("") // change this
      .click()
      .type("") // change this
      .invoke("val")
      .should("be.ok");

    /* 
    Get the `<input type="email" />, click it, and type a correctly formatted email
    */
    cy.get("") // change this
      .click()
      .type("") // change this
      .invoke("val")
      .should("be.ok");

    /* 
    Get the last <input type="radio"> element and check it
    */
    cy.get(""); // add selectors here
    // don't change this
    cy.get("[name=gender]").should((val) => expect(val[3]).to.be.checked);

    /* BONUS */

    /* 
    Get the `<input type="date" />, click it, and type a date
    */
    cy.get("") // change this
      .click()
      .type("") // change this
      .invoke("val")
      .should("be.ok");

    /*
    Get the <select>, click it, and click the <option> that contains Wales.
    */
    cy.get("") // change this
      .select("") // change this
      .should("have.value", "Wales");

    /*
    Click the <button type="submit"> and get the 
    */
    cy.get("#success").should("be.empty");
    cy.get("").click(); // change this
    cy.get("#success").should("contain", "");
  });
});
