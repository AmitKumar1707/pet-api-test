Feature: Testing POST API for pet creation

    Scenario: Make a POST request to create a pet
    Given I have a POST request
    When I set the request body to the payload
    And I set the request URI to the URI
    Then the response status code should be 200
  
    Scenario: Make a successful POST request to create a pet with a different status
    Given I have a POST request
    When I set the request body to the valid payload with a different status
    And I set the request URI to the valid URI
    Then the response status code should be 200

## Invalid tests

    Scenario: Make a POST request with an empty payload
    Given I have a POST request
    When I set the request body to an empty payload
    And I set the request URI to the valid URI
    Then the response status code should be 400

    Scenario: Make a POST request with a payload missing a required field
    Given I have a POST request
    When I set the request body to a payload with a missing required field
    And I set the request URI to the valid URI
    Then the response status code should be 400

    Scenario: Make a POST request with a payload containing an invalid data type
    Given I have a POST request
    When I set the request body to a payload with an invalid data type
    And I set the request URI to the valid URI
    Then the response status code should be 400