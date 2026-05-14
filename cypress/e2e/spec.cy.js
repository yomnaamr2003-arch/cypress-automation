import HomePage from '../pages/HomePage'

describe('Practice Software Testing Website - 15 Test Cases', () => {
  let data
  const homePage = new HomePage()

  before(() => {
    cy.fixture('testData').then((testData) => {
      data = testData
    })
  })

  beforeEach(() => {
    homePage.visit(data.websiteUrl)
  })

  it('Test Case 1 - Homepage loads successfully', () => {
    cy.url().should('include', 'practicesoftwaretesting.com')
    homePage.getBody().should('be.visible')
    homePage.getAppRoot().should('exist')
  })

  it('Test Case 2 - Navigation menu is visible', () => {
    homePage.getNavigationMenu().should('exist')
    homePage.getNavigationMenu().should('be.visible')
    homePage.getNavigationLinks().its('length').should('be.gt', 0)
  })

  it('Test Case 3 - Search input accepts typing', () => {
    homePage.typeInSearch(data.searchText)
    homePage.getSearchInput().should('have.value', data.searchText)
    homePage.getSearchInput().should('be.visible')
    homePage.getSearchInput().should('exist')
  })

  it('Test Case 4 - Search input can be cleared and retyped', () => {
    homePage.typeInSearch(data.searchText)
    homePage.getSearchInput().should('have.value', data.searchText)

    homePage.typeInSearch('pliers')
    homePage.getSearchInput().should('have.value', 'pliers')

    homePage.getSearchInput().should('be.visible')
  })

  it('Test Case 5 - Product cards are displayed on homepage', () => {
    homePage.getProductCards().should('exist')
    homePage.getProductCards().should('be.visible')
    homePage.getProductCards().its('length').should('be.gt', 0)
  })

  it('Test Case 6 - Navigation bar is visible', () => {
    homePage.getNavigationMenu().should('exist')
    homePage.getNavigationMenu().should('be.visible')
    homePage.getNavigationLinks().its('length').should('be.gt', 0)
  })

  it('Test Case 7 - Sign in link opens login page', () => {
    homePage.clickSignIn()
    cy.url().should('include', '/auth/login')
    homePage.getBody().should('be.visible')
    homePage.getText('Login').should('exist')
  })

  it('Test Case 8 - Contact link opens contact page', () => {
    homePage.clickContact()
    cy.url().should('include', '/contact')
    homePage.getBody().should('be.visible')
    homePage.getText('Contact').should('exist')
  })

  it('Test Case 9 - Categories heading is visible', () => {
    homePage.getText('Categories').should('exist')
    homePage.getText('Categories').should('be.visible')
    homePage.getBody().should('contain.text', 'Categories')
  })

  it('Test Case 10 - Sort dropdown is visible and selectable', () => {
    homePage.getSortDropdown().should('exist')
    homePage.getSortDropdown().should('be.visible')
    homePage.selectSortOption('Name (A - Z)')
    homePage.getSortDropdown().should('be.enabled')
  })

  it('Test Case 11 - Price Range heading is visible', () => {
    homePage.getText('Price Range').should('exist')
    homePage.getText('Price Range').should('be.visible')
    homePage.getBody().should('contain.text', 'Price Range')
  })

  it('Test Case 12 - Contact link is visible', () => {
    homePage.getText('Contact').should('exist')
    homePage.getText('Contact').should('be.visible')
    homePage.getBody().should('contain.text', 'Contact')
  })

  it('Test Case 13 - Sign in link is visible', () => {
    homePage.getText('Sign in').should('exist')
    homePage.getText('Sign in').should('be.visible')
    homePage.getBody().should('contain.text', 'Sign in')
  })

  it('Test Case 14 - Categories section contains tool categories', () => {
    homePage.getText('Categories').should('exist')
    homePage.getBody().should('contain.text', 'Hand Tools')
    homePage.getBody().should('contain.text', 'Power Tools')
  })

  it('Test Case 15 - Brands section is visible', () => {
    homePage.getText('Brands').should('exist')
    homePage.getText('Brands').should('be.visible')
    homePage.getBody().should('contain.text', 'Brands')
  })
})