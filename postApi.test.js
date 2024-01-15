import 'jest-cucumber';
import { Given, When, Then } from './apiSteps'; // Import your step definitions


describe('Create Pet API Tests', () => {
 
  test('Make a POST request to create a pet', async () => {
    Given('I have a POST request');
    When('I set the request body to the payload');
    And('I set the request URI to the URI');
    Then('the response status code should be 200');
  });

  test('Make a successful POST request to create a pet with a different status', async () => {
    Given('I have a POST request');
    When('I set the request body to the valid payload with a different status');
    And('I set the request URI to the URI');
    Then('the response status code should be 200');
  });

  test('Make a POST request with a payload missing a required field', async () => {
    Given('I have a POST request');
    When('I set the request body to a payload with a missing required field');
    And('I set the request URI to the URI');
    Then('the response status code should be 400');
  });

  test('Make a POST request with an empty payload', async () => {
    Given('I have a POST request');
    When('I set the request body to an empty payload');
    And('I set the request URI to the URI');
    Then('the response status code should be 400');
  });

  test('Make a POST request with a payload containing an invalid data type', async () => {
    Given('I have a POST request');
    When('I set the request body to a payload with an invalid data type');
    And('I set the request URI to the URI');
    Then('the response status code should be 400');
  });

});






