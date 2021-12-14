/// <reference types="cypress" />

describe('register test', () => {

    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/register');

        cy.get('#first-name').type('Robert');
        cy.get('#last-name').type('Halford');
        cy.get('#email').type('judaspriest@england.com');
        cy.get('#password').type('dukenukem3d');
        cy.get('#password-confirmation').type('dukenukem3d');
        cy.get('[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
      
       
    });

    
});

/* Namerno sam stavio i login sa registrovanim korisnikom da bi
   se proverio da je registrovani email i password tacan*/

/*
describe('login test', () => {

    it('visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/login');

        
        cy.get('#email').type('judaspriest@england.com');
        cy.get('#password').type('dukenukem3d');
        cy.get('button[type="submit"]').click();
      
       
    });

    
});
*/
