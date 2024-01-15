import { Given, When, Then } from '@cucumber/cucumber';
import axios from 'axios';
import fs from 'fs';

let apiUrl;
let requestBody;
let response;

Given('I have a POST request', function () {
  // Read URI from uri.json
  const uriData = JSON.parse(fs.readFileSync('./data/serviceURI.json', 'utf-8'));
  apiUrl = uriData.uri;
});

When('I set the request body to the payload', function () {
  // Read Payload from payload.json
  requestBody = JSON.parse(fs.readFileSync('./data/payload.json', 'utf-8'));
});

When('I set the request body to the valid payload with a different status', function () {
  // Read Payload from payload.json
  requestBody = JSON.parse(fs.readFileSync('./data/payload.json', 'utf-8'));

  // Modify the status in the payload
  requestBody.status = 'pending';
});

When('I set the request body to a payload with a missing required field', function () {
  // Read Payload from payload.json
  requestBody = JSON.parse(fs.readFileSync('./data/payload.json', 'utf-8'));

  // Remove a required field from the payload
  delete requestBody.name;
});

When('I set the request body to an empty payload', function () {
  // Set an empty object as the payload
  requestBody = {};
});

When('I set the request body to a payload with an invalid data type', function () {
  // Read Payload from payload.json
  requestBody = JSON.parse(fs.readFileSync('./data/payload.json', 'utf-8'));

  // Set a field with an invalid data type
  requestBody.id = 'invalid';
});


When('I set the request URI to the URI', function () {
  // URI is already set in Given step
});

Then('the response status code should be {int}', async function (statusCode) {
  const config = {
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  try {
    response = await axios.post(apiUrl, requestBody, config);
    expect(response.status).toBe(statusCode);
    // Add more assertions based on your API response if needed
  } catch (error) {
    throw error;
  }
});
