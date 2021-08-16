# Answers

Note: there are multiple ways of solving this, so don't worry if your solution was a little different

- Get the h1 element
  `cy.get("h1").should("have.length", 1);`

- Get the `<input>` element by its ID of "input"
  `cy.get("#input").should("have.length", 1);`

- Get the `<h2>` element by within the `<section id="about">` element
  `cy.get("#about h2").should("have.length", 1);`

- Get the `<p>` elements with a class name of "about"
  `cy.get("p.about").should("have.length", 3);`

- Get both the `<h1>` elements and the `<h2>` elements
  `cy.get("h1,h2").should("have.length", 3);`

## Bonus

- Get the last `<p>` with a class of "about"
  `cy.get("p.about:last-of-type").should("have.class", "is-last");`

- Get the empty `<section>`
  `cy.get("section:empty").should("have.id", "empty-section");`

- Get the `<a>` element that is not a child of `<nav>`
  `cy.get("a:not(nav a)").should("have.length", 1);`
