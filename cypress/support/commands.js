import{faker} from '@faker-js/faker';

Cypress.Commands.add('preencherNovoUsuario', () => {

    //Clica no link de Signup / Login e preenche os dados do usuário para cadastro
    cy.get('a[href="/login"]').click();
    cy.get('[data-qa="signup-name"]').type(faker.person.firstName());
    cy.get('[data-qa="signup-email"]').type(faker.internet.email());
    cy.get('[data-qa="signup-button"]').click();
});

Cypress.Commands.add('preencherFormularioCadastroECriarConta', () => {
    cy.get('#password').should('be.visible');
    
    //Preenchendo os dados do usuário no formulário de cadastro
    cy.get('#id_gender1').check();
    cy.get('#password').type(faker.internet.password());
    cy.get('#days').select('8');
    cy.get('#months').select('December');
    cy.get('#years').select('1990');

    //Clica no checkbox de newsletter e ofertas
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    
    //Preenchendo o endereço e outras informações do usuário
    cy.get('#first_name').type(faker.person.firstName());
    cy.get('#last_name').type(faker.person.lastName());
    cy.get('#address1').type(faker.location.streetAddress());
    cy.get('#country').select('United States');
    cy.get('#state').type('California');
    cy.get('#city').type('Los Angeles');
    cy.get('#zipcode').type(faker.location.zipCode());
    cy.get('#mobile_number').type(faker.phone.number('##########'));

    // Clica no botão de criar conta
    cy.get('[data-qa="create-account"]').click();
});