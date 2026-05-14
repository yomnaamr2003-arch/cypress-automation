Feature: Home Page

  Scenario: Homepage loads successfully
    Given I open the website
    Then the homepage should load successfully

  Scenario: Search input accepts typing
    Given I open the website
    When I type in the search field
    Then the search value should appear