describe("E2E test", () => {
  beforeEach(() => {
    cy.visit("cypress/integration/3-an-e2e-test/index.html");
  });

  it("should be able to Sign in successfully with valid credentials", () => {
    /* 
    Get the username input and type in the correct username
    */
    cy.get("");

    /* 
    Get the password input and type in any password
    */
    cy.get("");

    /* 
    Click the submit button
    */
    cy.get("");

    /* 
    If this passes, then your e2e test works! 🙌
    */
    cy.get("h2").contains("Welcome to HealthHero");
  });

  it("should not be able to Sign in with invalid credentials", () => {
    /* 
    Get the username input and type in any invalid username
    */
    cy.get("");

    /* 
    Get the password input and type in any password
    */
    cy.get("");

    /* 
    Click the submit button
    */
    cy.get("");

    /* 
    If this passes, then your e2e test works! 🙌
    */
    cy.get("h2").contains("Login failed");
  });

  it.only("advanced - intercept the network request", () => {
    // Create an alias for the request you're intercepting
    // Docs on intercept can be found here: https://docs.cypress.io/api/commands/intercept
    //
    // Hint: you can use '*' as the matcher for `intercept()`
  });
});
