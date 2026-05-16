import data from "../fixtures/testData.json"

class HomePage {

  openHomePage() {
    cy.openWebsite(data.websiteUrl)
  }

  verifyHomePageLoaded() {
    cy.url().should('include', 'practicesoftwaretesting.com')
    cy.pageBody().should('be.visible')
    cy.appRoot().should('exist')
  }

  verifyNavigationMenu() {
    cy.navBar().should('exist')
    cy.navBar().should('be.visible')
    cy.navLinks().its('length').should('be.gt', 0)
  }

  searchProduct() {
    cy.searchField().clear().type(data.searchText)
  }

  verifySearchProduct() {
    cy.searchField().should('have.value', data.searchText)
    cy.searchField().should('be.visible')
    cy.searchField().should('exist')
  }

  searchAnotherProduct() {
    cy.searchField().clear().type(data.secondSearchText)
  }

  verifySecondSearchProduct() {
    cy.searchField().should('have.value', data.secondSearchText)
    cy.searchField().should('be.visible')
    cy.searchField().should('exist')
  }

  verifyProductCards() {
    cy.productCards().should('exist')
    cy.productCards().should('be.visible')
    cy.productCards().its('length').should('be.gt', 0)
  }

  openLoginPage() {
    cy.signInButton().click()
  }

  openContactPage() {
    cy.contactButton().click()
  }

  verifyText(text) {
    cy.contains(text).should('exist')
    cy.contains(text).should('be.visible')
    cy.pageBody().should('contain.text', text)
  }

  sortProducts() {
    cy.sortDropdown().should('exist')
    cy.sortDropdown().should('be.visible')
    cy.sortDropdown().select(data.sortOption)
    cy.sortDropdown().should('be.enabled')
  }

  verifyCategoriesContent() {
    cy.contains('Categories').should('exist')
    cy.pageBody().should('contain.text', 'Hand Tools')
    cy.pageBody().should('contain.text', 'Power Tools')
  }
}

export default HomePage