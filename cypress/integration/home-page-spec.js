/// <reference types="Cypress" />

describe('Home page', () => {
    it('Loads the next launch', () => {
        cy.visit('http://localhost:8080/');
        cy.get('[data-cy="next-launch"]').should('have.text', 'Next Launch');
        cy.get('.view-checklist').should('exist').children().should('have.length', 3);
        cy.get('.view-checklist > :nth-child(2)').contains('Flight Number')
        cy.get('.view-checklist > :nth-child(3)').contains('Launch site'); //error
    });

    it('loads in light mode', () => {
        cy.visit('http://localhost:8080/');
        cy.get('.app-container').should('have.class', 'light');
        cy.get('section').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('.foot > * input').should('be.checked');
    })


    it('Allows changing to dark mode', () => {
        cy.visit('http://localhost:8080/');
        cy.get('.k-switch-container > input').click({force: true});
        cy.get('.app-container').should('have.class', 'dark');
    })
})