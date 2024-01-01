//para validar comandos de cypress
/// <reference types="cypress" />


//Los assert son requerimientos, para comprobar que las cosas estén como deben

describe("Introduccion a los assert", () => {

    it("Introduccion de assert", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.get('#wsf-1-field-21').should("be.visible")  //primer ejemplo, que el campo exista y sea visible
        //se pueden concatenar entre ellos, por ej:
        cy.get('#wsf-1-field-23').should("be.visible").should("be.enabled")
    
    })

})