Feature: Get Users API

  Scenario: Retrieve list of users
    Given I make a GET request to "/images/search?limit=10"
    Then the response status should be 200