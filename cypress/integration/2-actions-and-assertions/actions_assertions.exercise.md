# Actions and assertions

The most common actions that can be performed in Cypress involve:

- Clicking
- Typing

You can find documentation:

- [clicking elements](https://docs.cypress.io/api/commands/click)
- [typing into inputs](https://docs.cypress.io/api/commands/type)
- [interacting with select elements](https://docs.cypress.io/api/commands/select)
- [interacting with checkboxes](https://docs.cypress.io/api/commands/check)

---

## Click

```html
<button id="continue" />
```

To target this element in Cypress and click on it:

```js
cy.get("#continue").click();
```

---

## Type

```html
<input id="firstname" placeholder="Enter your firstname" />
```

To target this element in Cypress and type into it:

```js
cy.get("#firstname").type("Jim");
```

---

<br>

## Exercise

Using the pre-defined `actions-assertions.spec.ts` file

1. Visit the `index.html` page in the `2-actions-assertions` folder
2. Fill out the form and Submit it

### Bonus exercises

- Once you complete all 8 exercises in `actions-and-assertions.spec.ts`, why not try exploring some of Cypress' more advanced actions and assertion APIs? You can find some examples in the [actions.spec.js](../examples/actions.spec.js) and [assertions.spec.js]('../examples/assertions.spec.js) files.
- Look at how you can use some of the functions in those files to act and assert against the elements in the test site.
