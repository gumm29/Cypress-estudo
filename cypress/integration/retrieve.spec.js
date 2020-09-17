describe('Produtos', () => {
  const getProdutos = () =>{
    cy.request('/produtos')
    .then((response) =>{
      expect(response.status).to.eq(200)
      expect(response.body[0]['id']).to.not.be.null
      expect(response.body[0]['nome']).to.not.be.null
      expect(response.body[0]['descricao']).to.not.be.null
      expect(response.body[0]['preco']).to.not.be.null
    })
  }

  it('retrieve all itens', () =>{
    getProdutos()
  })
})