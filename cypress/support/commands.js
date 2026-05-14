
Cypress.Commands.add('openWebsite', (url) => {
  cy.visit(url)
})

Cypress.Commands.add('typeText', (selector, text) => {
  cy.get(selector).clear().type(text)
})

Cypress.Commands.add('clickByText', (text) => {
  cy.contains(text).click()
})

Cypress.Commands.add('clickFirstElement', (selector) => {
  cy.get(selector).first().click()
})

Cypress.Commands.add('clearText', (selector) => {
  cy.get(selector).clear()
})
Cypress.Commands.add('selectOption', (selector, value) => {
  cy.get(selector).select(value)
})