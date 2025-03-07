class EquipamentoTelemetriaRequest {
    static getEquipamento(endpoint: string) {
      return cy.api({
        method: "GET",
        url: endpoint,
        failOnStatusCode: false,
      });
    }
  }
  
export default EquipamentoTelemetriaRequest;  