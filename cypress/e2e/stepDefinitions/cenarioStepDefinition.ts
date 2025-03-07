import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import EquipamentoTelemetriaRequest from "../requests/exemploRequest";
import EquipamentoTelemetriaResponse from "../responses/exemploResponse";

let response: Cypress.Response;

Given("I make a GET request to {string}", (endpoint: string) => {
  EquipamentoTelemetriaRequest.getEquipamento(endpoint)
  .then((res => {
    response = res;
  }));
});

Then("the response status should be {int}", (statusCode: number) => {
  EquipamentoTelemetriaResponse.validarEquipamento(statusCode, response)
});
