class exemploResponse {
    static validarExemplo(statusCode: number, response: Cypress.Response) {
      expect(response.status).to.eq(statusCode);
      expect(response.body).to.be.an("array").and.not.to.be.empty;
  
      response.body.forEach((item) => {
        expect(item).to.be.an("object");
        expect(item.id).to.be.a("string").and.not.to.be.empty;
        // expect(item.url).to.be.a("string").and.match(/^https:\/\/cdn2\.thedogapi\.com\/images\/.+\.(jpg|png)$/);
        expect(item.width).to.be.a("number").and.be.greaterThan(0);
        expect(item.height).to.be.a("number").and.be.greaterThan(0);
        expect(item).to.have.all.keys("id", "url", "width", "height");
      });
      expect(response.body.length).to.eq(10);
    }
}
  
export default exemploResponse;  