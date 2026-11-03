import { faker } from '@faker-js/faker';

describe('Testes Práticos no Automation Exercise', () => {

  beforeEach(() => {
    // Acessa a página inicial antes de cada teste
    cy.visit('https://automationexercise.com');
  });

  const usuario = {
    nome: faker.person.firstName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
  };

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

  it('Deve cadastrar um novo usuário', () => {

    //Acessa a tela de Login/Cadastro e preenche os dados do usuário para cadastro
    cy.preencherNovoUsuario(usuario);
    cy.get('#password').should('be.visible');
    cy.preencherFormularioCadastroECriarConta(usuario);

    // Valida que a conta foi criada com sucesso
    cy.get('[data-qa="account-created"]').should('have.text', 'Account Created!');
  })

  it('Deve logar com um usuario valido depois deslogar', () => {
    //Acessa a tela de Login/Cadastro e verifica que a tela carregou corretamente
    cy.get('a[href="/login"]').click();
    cy.contains('Login to your account').should('be.visible');

    cy.preencherFormularioLogin(usuario);

    //Valida que o usuário logou com sucesso
    cy.contains('Logged in as').should('be.visible');

    //Desloga o usuário e verifica que a conta foi deletada com sucesso
    cy.get('a[href="/logout"]').click();
    cy.contains('Login to your account').should('be.visible');

  })

  it('Deve tentar cadastrar um usuario com email ja existente', () => {
   //Acessa a tela de Login/Cadastro e verifica que a tela carregou corretamente
    cy.get('a[href="/login"]').click();
    cy.get('.signup-form h2').should('have.text', 'New User Signup!');

    //Tenta cadastrar um usuário com email já existente
    cy.get('[data-qa="signup-name"]').type(usuario.nome);
    cy.get('[data-qa="signup-email"]').type(usuario.email);
    cy.get('[data-qa="signup-button"]').click();

    //Valida que a mensagem de erro foi exibida
    cy.get('.signup-form p').should('have.text', 'Email Address already exist!');

  })

  
});