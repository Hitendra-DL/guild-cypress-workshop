# Actions and assertions

The most common actions that can be performed in Cypress involve:
- Clicking
- Typing

___
## Click

```html
<button id="continue"/>
```

To target this element in Cypress and click on it:
```js
cy.get('#continue').click();
```

___
## Type


```html
<input id="firstname" placeholder="Enter your firstname"/>
```

To target this element in Cypress and type into it:
```js
cy.get('#firstname').type('Jim');
```

___
<br>

## Exercise
Using the pre-defined `actions-assertions.spec.ts` file
1. Visit the `index.html` page in the `2-actions-assertions` folder 
2. Fill out the form and Submit it

