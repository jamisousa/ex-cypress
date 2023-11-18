/// <reference types="cypress" />

import LoginForm from "./LoginForm";

//Descrevemos que tipo de teste estamos fazendo
describe("Teste para o LoginForm", () => {
  //Descrevemos o que vamos testar nesse bloco em específico
  it("Renderiza o formulário", () => {
    //Renderizamos o formulário
    cy.mount(<LoginForm />);

    //Verificamos se o formulário existe
    cy.get("form").should("exist");

    //Verificamos se os inputs de e-mail e senha existem
    cy.get('input[type="email"]').should("exist");
    cy.get('input[type="password"]').should("exist");

    //Verificamos se o botão existe
    cy.get("button").should("exist");
  });
});
