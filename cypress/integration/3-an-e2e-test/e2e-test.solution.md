# Solution

## Exercise 1

- Get the username input and type in the correct username

```javascript
cy.get("input").first().type("cypress-test");
```

- Get the password input and type in any password

```javascript
cy.get("input").eq(1).type("password1234");
```

- Click the submit button

```javascript
cy.get("button[type=submit]").click();
```

## Exercise 2

- Get the username input and type in an incorrect username

```javascript
cy.get("input").first().type("bad-username");
```

- Get the password input and type in any password

```javascript
cy.get("input").eq(1).type("password1234");
```

- Click the submit button

```javascript
cy.get("button[type=submit]").click();
```

## Exercise 3

```javascript
// Intercept the response and assert against it
cy.intercept("POST", "*", (req) => {
  // matches against any POST request
  req.on("before:response", (res) => {
    // add an event listener to listen to the before:response event
    expect(res.body).to.be.equal("success"); // check that the response is correct
  });
}).as("request"); // assigns this request to an alias

// other test code

cy.wait("@request"); // ensures that the test waits for your request to return before exiting
```
