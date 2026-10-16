describe('Testes Práticos no Automation Exercise', () => {

  beforeEach(() => {
    // Acessa a página inicial antes de cada teste
    cy.visit('https://automationexercise.com');
  });

  it('1. Deve validar que a página inicial carregou', () => {
    // Garante que o logo do site está visível na tela
    cy.get('.logo img').should('be.visible');
  });

  it('2. Deve buscar por um produto específico', () => {
    // Clica no menu de produtos
    cy.get('a[href="/products"]').click();
    
    // Digita "dress" na busca e clica no botão pesquisar
    cy.get('#search_product').type('dress');
    cy.get('#submit_search').click();
    
    // Valida que o resultado trouxe produtos
    cy.get('.features_items').should('contain', 'Searched Products');
  });

  it('3. Deve ir para a tela de Login/Cadastro', () => {
    // Clica no link de Signup / Login
    cy.get('a[href="/login"]').click();
    
    // Valida que o formulário de cadastro está visível
    cy.get('.signup-form h2').should('have.text', 'New User Signup!');
  });

  

});