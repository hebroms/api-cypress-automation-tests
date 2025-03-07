import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import exemploRequest from "../requests/exemploRequest";
import exemploResponse from "../responses/exemploResponse";

let response: Cypress.Response;

Given("I make a GET request to {string}", (endpoint: string) => {
  exemploRequest.getExemplo(endpoint)
  .then((res => {
    response = res;
  }));
});

Then("the response status should be {int}", (statusCode: number) => {
  exemploResponse.validarExemplo(statusCode, response)
});
