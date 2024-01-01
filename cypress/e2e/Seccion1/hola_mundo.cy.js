/// <reference types="cypress" />

describe("Bienvenido al Curso de Cypress - Seccion 1", () => {  //será el título superior

    it("Mi primer test -> Hola mundo", () => { //aparece como segundo título
        cy.log("Hola Mundo") //se muestra como uno de los pasos
        cy.wait(1500) //que espere segundo y medio para el siguiente comando
    })

    it("Segundo test -> campo name", () => {
        cy.visit("https://testingqarvn.com.es/datos-personales")
        cy.get('#wsf-1-field-21').type("Vanessa") //para seleccionar un ID se pone # delante, una clase un .
        cy.get('#wsf-1-field-22').type("Esteban")
        cy.get('#wsf-1-field-23').type("ejemplocy@gmail.com")
        cy.get('#wsf-1-field-24').type("669123456")
        cy.get('#wsf-1-field-28').type("Calle de la Imaginacion, 22")
        cy.wait(2000)
        cy.get('#wsf-1-field-27').click() //es el submit
    })

})