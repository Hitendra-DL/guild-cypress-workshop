# Selectors

There are a few ways to select elements on a page. The most common ways are by:

- Id
- Class
- Type
- Attribute

You can find the documentation for [getting elements here](https://docs.cypress.io/api/commands/get)

---

## Id

Ids selectors can be targeted by using the `#` symbol preceding the value of the id

e.g:

```html
<input id="firstname" placeholder="Enter your firstname" />
```

The id of this HTML element is `#firstname`

To target this element in Cypress and type into it:

```js
cy.get("#firstname").type("Jim");
```

---

## Class

Class can be targeted by using the `.` symbol preceding the value of the class

e.g:

```html
<button class="small" name="continue" />
```

The class of this HTML element is `.small`

To target this element in Cypress and click on it:

```js
cy.get(".small").click();
```

---

## Type

Type selectors are those that target an HTML element, e.g. input, button, div, h1 etc

e.g:

```html
<button id="continue" type="submit" />
```

The type of this locator is `button`

To target this element in Cypress and click on it:

```js
cy.get("button").click();
```

---

## Attribute

Attribute selectors are those that target an element's attribute: `type="text"`, `href="index.html"`, etc.

e.g:

```html
<button id="continue" type="submit" />
```

The attribute we want to locate the element by is `type="submit"`

To target this element in Cypress and click on it:

```js
cy.get("[type=submit]").click();
```

The format for this selector is: `[` + attribute name + `=` + value + `]`. which looks like `[type=submit]` for our button element.

---

<br>

## Exercise

### Step 1

- Open Cypress by running `npm run test` in the terminal
- Run the `1-selectors/selectors.spec.ts` test file

### Step 2

- Open the `selectors.spec.ts` in your code editor
- Go through each line and fix all the `cy.get("").should()` until the test passes.
- Do not change any of the text within the `should("")` functions

### Bonus exercises

- Once you complete all 8 exercises in `selectors.spec.ts`, why not try exploring some of Cypress' more advanced traversal APIs? You can find some examples in the [traversal.spec.js](../examples/traversal.spec.js) file
- Look at how you can use functions like `eq()`, `first()`, `next()`, and `parent()`, to select some elements from the test site.

### Help

If you need a refresher on what the various CSS selectors look like, you can go back to [this online game](https://flukeout.github.io/)
