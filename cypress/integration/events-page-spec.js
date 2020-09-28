/// <reference types="Cypress" />

describe('Events page', () => {
    it('Loads the history of launches', () => {
        cy.visit('http://localhost:8080/');
        cy.get('.topnav > ul > :nth-child(2) > .text_link').click();
        cy.location('pathname').should('equal', '/events');
    });

    it('loads from api', () => {
        cy.visit('http://localhost:8080/events');
        //check loading from api

        cy.get('.app-container').should('have.class', 'light');
        cy.get('section').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('.foot > * input').should('be.checked');
    })


    it('loads from fixture', () => {
        cy.fixture('spacex-history.json').as('sample')
        cy.server();
        cy.route({
            method: "GET",
            url:'https://api.spacexdata.com/v3/history',
            response: 'fixture:spacex-history.json'
        });
        cy.visit('http://localhost:8080/events');
    })
})