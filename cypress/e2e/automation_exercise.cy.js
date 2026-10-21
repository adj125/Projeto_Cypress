describe('Testes Práticos no Automation Exercise', () => {

  beforeEach(() => {
    // Acessa a página inicial antes de cada teste
    cy.visit('https://automationexercise.com');
  });

  it('Deve validar que a página inicial carregou', () => {
    // Garante que o logo do site está visível na tela
    cy.get('.logo img').should('be.visible');
  });

  it('Deve ir para a tela de Login/Cadastro', () => {
    // Clica no link de Signup / Login
    cy.get('a[href="/login"]').click();
    
    // Valida que o formulário de cadastro está visível
    cy.get('.signup-form h2').should('have.text', 'New User Signup!');
  });

  it.only('Deve cadastrar um novo usuário', () => {

    //Acessa a tela de Login/Cadastro e preenche os dados do usuário para cadastro
    cy.preencherNovoUsuario();
    cy.get('#password').should('be.visible');
    cy.preencherFormularioCadastroECriarConta();

    // Valida que a conta foi criada com sucesso
    cy.get('[data-qa="account-created"]').should('have.text', 'Account Created!');
  })

  
});