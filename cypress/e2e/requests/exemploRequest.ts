class exemploRequest {
    static getExemplo(endpoint: string) {
      return cy.api({
        method: "GET",
        url: endpoint,
        failOnStatusCode: false,
      });
    }
  }
  
export default exemploRequest;  