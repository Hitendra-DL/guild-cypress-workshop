# Answers

- Get the `<input type="text" />, click it, and type your name

```javascript
cy.get("[type=text]") // solution
  .click()
  .type("Andrico")
  .invoke("val")
  .should("be.ok");
```

- Get the `<input type="number" />, click it, and type a number

```javascript
cy.get("[type=number]") // solution
  .click()
  .type("80")
  .invoke("val")
  .should("be.ok");
```

- Get the `<input type="email" />, click it, and type a correctly formatted email

```javascript
cy.get("[type=email]") // solution
  .click()
  .type("test-user@healthhero.com")
  .invoke("val")
  .should("be.ok");
```

- Get the last <input type="radio"> element and check it

```javascript
cy.get("[type=radio]") //solution
  .last()
  .check();

cy.get("[name=gender]").should((val) => expect(val[3]).to.be.checked);
```

- Get the `<input type="date" />, click it, and type a correctly formatted date

  ```javascript
  cy.get("[type=date]") // solution
    .click()
    .type("1990-12-12")
    .invoke("val")
    .should("be.ok");
  ```

- Get the <select>, click it, and click the <option> that contains Wales .

```javascript
cy.get("select") // solution
  .select("Wales") // change this
  .should("have.value", "Wales");
```

- Click the <button type="submit"> and check that the success message is displayed

```javascript
cy.get("#success").should("be.empty");
cy.get("").click();
cy.get("#success").should("contain", "Your profile has been updated");
```
