Feature: Login Page

  Scenario: User opens login page
    Given I open the website
    When I click sign in
    Then the login page should appear