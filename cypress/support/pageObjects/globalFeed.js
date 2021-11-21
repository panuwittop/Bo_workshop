/// <reference types="cypress" />

export class globalFeed {
    clickAddFavorite() {
        cy.intercept('GET', '**/api/articles**', { fixture: 'articles.json' });
        cy.wait(3000);
        cy.intercept('POST', '**/api/articles/TOPTEST-368/favorite').as('favorite');
        cy.contains('a', 'Global Feed').click();
        cy.get('app-favorite-button').eq(0).should('contain', '0');
        cy.get('.btn-outline-primary')
            .should('have.css', 'background-color')
            .and('eq', 'rgba(0, 0, 0, 0)')

        cy.intercept('POST', '**/api/articles/TOPTEST-368/favorite').as('favorite');
        cy.get('app-favorite-button').eq(0).click();
        cy.wait('@favorite');
        cy.get('app-favorite-button').eq(0)
            .should('contain', '1');
        cy.get('.btn-primary')
            .should('have.css', 'border-color')
            .and('eq', 'rgb(65, 150, 65)')
    }
    clickDeleteFavorite() {
        cy.intercept('DELETE', '**/api/articles/TOPTEST-368/favorite').as('favorite');
        cy.get('app-favorite-button').eq(0).click();
        cy.wait('@favorite');
        cy.get('app-favorite-button').eq(0)
            .should('contain', '0');
        cy.get('.btn-outline-primary')
            .should('have.css', 'border-color')
            .and('eq', 'rgb(92, 184, 92)')



    }
}

export const onglobalFeed = new globalFeed