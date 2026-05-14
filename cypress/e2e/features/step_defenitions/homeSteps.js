import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("I open the website", () => {
  cy.visit("https://practicesoftwaretesting.com/")
})

Then("the homepage should load successfully", () => {
  cy.url().should("include", "practicesoftwaretesting.com")
  cy.get("body").should("be.visible")
  cy.get("app-root").should("exist")
})

When("I type in the search field", () => {
  cy.get('[data-test="search-query"]').type("hammer")
})

Then("the search value should appear", () => {
  cy.get('[data-test="search-query"]').should("have.value", "hammer")
})

When("I click sign in", () => {
  cy.contains("Sign in").click()
})

Then("the login page should appear", () => {
  cy.url().should("include", "/auth/login")
  cy.contains("Login").should("exist")
})

When("I click contact", () => {
  cy.contains("Contact").click()
})

Then("the contact page should appear", () => {
  cy.url().should("include", "/contact")
  cy.contains("Contact").should("exist")
})