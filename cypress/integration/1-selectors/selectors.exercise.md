# Selectors

There are a few ways to select elements on a page. The most common ways are by:
- Id
- Class
- Type
___
## Id

Ids selectors can be targeted by using the `#` symbol preceding the value of the id 

e.g:

```html
<input id="firstname" placeholder="Enter your firstname"/>
```

The id of this HTML element is `#firstname`

To target this element in Cypress and type into it:
```js
cy.get('#firstname').type('Jim');
```

___
## Class

Class can be targeted by using the `.` symbol preceding the value of the class

e.g:

```html
<button class="small" name="continue"/>
```

The class of this HTML element is `.small`

To target this element in Cypress and click on it:
```js
cy.get('.small').click();
```

___
## Type
Type selectors are those that target an HTML element, e.g. input, button, div, h1 etc

e.g:

```html
<button id="continue" type="submit"/>
```

The type of this locator is `button`

To target this element in Cypress and click on it:
```js
cy.get('button').click();
```

___
<br>

## Exercise
Using the pre-defined `selectors.spec.ts` file
1. Visit the `index.html` page in the `1-selectors` folder 
2. Select the name input field by id
3. Type a name into the field

Repeat the exercise by targeting the name input by using the Type and Class of the HTML element.